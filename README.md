# KrishiMitra-Intelligent_Agricultural_Assistant
KrishiMitra is an AI-powered agriculture assistant platform built for Indian farmers. The goal was to create a single tool where a farmer can get crop recommendations, fertilizer suggestions, disease diagnosis, and government scheme information — all in one place with Hindi and English support.
How it works:
1. Crop Recommendation Model
Uses a machine learning classification model trained on agricultural datasets. The farmer enters 7 inputs — Nitrogen (N), Phosphorus (P), Potassium (K), Temperature, Humidity, Rainfall, and Soil Type — and the model predicts the most suitable crop to grow along with a confidence score. Output also includes expected yield, water requirement, season, and farming tips.
2. Fertilizer Suggestion Model
Takes 6 inputs from the farmer — Nitrogen (N), Phosphorus (P), Potassium (K), Soil pH, Organic Carbon, and Crop Type — and recommends the best fertilizer along with exact dosage, application timing, step-by-step usage instructions, and alternative fertilizer options.
3. Plant Disease Detection Model
Uses a deep learning image classification model. The farmer uploads a photo of the affected crop leaf and the model identifies the disease. Output includes disease name, severity level (Low / Medium / High), affected crops, causes, symptoms, treatment steps, and prevention tips.
4. Government Schemes
Not an ML model but a smart filtering system. Farmers can filter central and state government schemes by state and category. Each scheme shows eligibility criteria, benefits, application deadline, and a direct apply link.
Tech Stack:
Frontend — React.js, Vite, Tailwind CSS, Axios, React Router DOM, JavaScript (ES6+)
ML Models — Python (details in /models folder)
Voice Input — Web Speech API with Hindi and English keyword parsing
Additional Features:

 Bilingual support — Hindi and English, 
 Voice input for hands-free form filling, 
 Drag and drop image upload for disease detection, 
 Fully responsive for mobile and desktop
