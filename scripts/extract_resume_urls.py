import re
import PyPDF2

p = PyPDF2.PdfReader('resume/Venu CV(5).pdf')
text = "\n".join([page.extract_text() for page in p.pages])
urls = re.findall(r'https?://\S+', text)
print('URLs found:', urls)
