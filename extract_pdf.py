import sys
import os

try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not installed")
    sys.exit(1)

file_path = "MinorPrograms.pdf"
if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    sys.exit(1)

try:
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    # Save to a file so I can read it properly without console buffer issues
    with open("minor_programs_content.txt", "w", encoding="utf-8") as f:
        f.write(text)
    
    print("Extraction complete. check minor_programs_content.txt")
except Exception as e:
    print(f"Error: {e}")
