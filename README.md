# 🌤️ Weather Dashboard

**Weather Dashboard** is a responsive web application that displays real-time weather data for any city using geographic coordinates from the [OpenCage Geocoding API](https://opencagedata.com/) and live weather data from the [Open-Meteo API](https://open-meteo.com/). Built with HTML, CSS, and JavaScript, it is deployed on [Netlify](https://www.netlify.com/) with serverless functions to keep API keys secure.

---

## 🔗 Live Demo

🌍 [View the Live Site](https://weatherdashboardjd.netlify.app/)  
> *(Replace this with your actual Netlify URL after deployment)*

---

## ✨ Features

- 🌍 Search current weather by city name
- 📍 Converts city names to coordinates using OpenCage API
- 🌡️ Displays temperature and wind speed from Open-Meteo
- 🔐 Uses Netlify Functions to securely hide API keys
- 📱 Responsive design for desktop and mobile

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **APIs**:
  - [OpenCage Geocoding API](https://opencagedata.com/)
  - [Open-Meteo API](https://open-meteo.com/)
- **Deployment**: Netlify (with Serverless Functions)

---

## 📁 Project Structure

weather-dashboard/
├── index.html
├── style.css
├── script.js
├── netlify.toml
└── netlify/
└── functions/
└── geocode-proxy.js

yaml
Copy
Edit

---

## 🔒 Environment Variables

This project uses a serverless function to hide the OpenCage API key.

### ➕ Add to Netlify:

| Key               | Value                                    |
|------------------|------------------------------------------|
| `OPENCAGE_API_KEY` | Your OpenCage API key (e.g. `70644ad...`) |

---

## ⚙️ How It Works

1. The user enters a **city name**
2. JavaScript calls `/api/geocode-proxy?city=CityName`
3. The Netlify Function securely contacts the OpenCage API
4. Coordinates are returned and passed to **Open-Meteo**
5. Current temperature and wind speed are displayed

---

## 🚀 How to Deploy on Netlify

1. Fork or clone the repo:  
   `git clone https://github.com/JanardanTripathi/Weather-Dashboard.git`
2. Push to your own GitHub (if not already)
3. Go to [Netlify](https://app.netlify.com/) → Import from GitHub
4. Set:
   - Build command: *(leave blank)*
   - Publish directory: `.`
5. Add environment variable:
   - `OPENCAGE_API_KEY`: Your OpenCage API key
6. Click **Deploy Site**


---

## 🙌 Acknowledgements

- [OpenCage Geocoding](https://opencagedata.com/)
- [Open-Meteo](https://open-meteo.com/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

---

## 👨‍💻 Author

**Janardan Tripathi**  
GitHub: [@JanardanTripathi](https://github.com/JanardanTripathi)

---
