#python -m pip install fastapi
#pip install uvicorn
from fastapi import FastAPI

app =FastAPI(
    title="AI Coding Tutor API",
    description="Backend for AI Coding Tutor",
    version="1.0.0"
)



@app.get("/get-data")
def index():
  return{
    "message":"AI coding tutor is now running ... sema furaaahaaa",
         
   }

@app.get("/get-health")
def health_check():
  return{"status":"healthy"}


@app.get("/get-about")
def about():
  return{
    "project":"AI Coding Tutor API",
    "backend":"FastAPI",
    "version":"1.0.0"
  }