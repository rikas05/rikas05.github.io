
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_groq import ChatGroq
from langchain.chains.conversational_retrieval.base import ConversationalRetrievalChain
from langchain_google_genai import GoogleGenerativeAIEmbeddings

# Set your API keys as environment variables
# For example:
# os.environ["GROQ_API_KEY"] = "your_groq_api_key"
# os.environ["GOOGLE_API_KEY"] = "your_google_api_key"

# --- RAG Pipeline ---
# 1. Load the resume
loader = PyPDFLoader("public/Rikas_Resume.pdf")
documents = loader.load()

# 2. Split the document into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
docs = text_splitter.split_documents(documents)

# 3. Create embeddings
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

# 4. Create a FAISS vector store
db = FAISS.from_documents(docs, embeddings)

# 5. Create a retriever
retriever = db.as_retriever()

# 6. Create a chatbot
model = ChatGroq(model="llama3-8b-8192")
qa = ConversationalRetrievalChain.from_llm(
    llm=model,
    retriever=retriever,
    return_source_documents=True,
    return_generated_question=True,
)

# --- FastAPI ---
app = FastAPI()

class Query(BaseModel):
    question: str

@app.post("/chat")
async def chat(query: Query):
    chat_history = []
    try:
        result = qa({"question": query.question, "chat_history": chat_history})
        return {"answer": result["answer"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
