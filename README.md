# **FDA Nutrition Facts Label Implementation**

This project implements an **FDA Nutrition Facts Label** using **React**, **TypeScript**, **TailwindCSS**, and **React-i18next** for multi-language support (English and Arabic). The application dynamically displays nutrient data fetched from a mock API and allows users to toggle nutrients and switch languages.

---

## **Features**

- **FDA Nutrition Label Design**:
  - Fully responsive and designed to replicate the FDA Nutrition Facts Label.
  - Uses `Roboto` font for English and `Noto Sans Arabic` font for Arabic.
  
- **Dynamic Nutrient Data**:
  - Nutrients are dynamically fetched from a mock API.
  - Toggle on/off nutrient display.
  - Supports both LTR and RTL layouts based on language.

- **Multi-language Support**:
  - Uses `React-i18next` for language translations.
  - Toggle between **English** and **Arabic**.

- **Customization**:
  - Adjust borders, fonts, and colors to match the FDA design guidelines.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v14+)
- **npm** or **yarn**

---

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/nutrition-facts-label.git
   cd nutrition-facts-label
  

### install
npm install
# OR
yarn install


npm run dev
# OR
yarn dev


---------
### projetct structure :
src/
├── components/
│   ├── Disclaimer.tsx      # Component to display the disclaimer section.
│   ├── LabelHeader.tsx     # Displays the header with serving size and calories.
│   ├── NutrientList.tsx    # Displays the list of nutrients dynamically.
│   ├── NutrientToggle.tsx  # Checkbox to toggle nutrient visibility.
├── data/
│   ├── response.json       # Mock API response with nutrient data.
├── App.tsx                 # Main application component.
├── index.css               # Global styles for Tailwind.
├── main.tsx                # Entry point for React application.
└── i18n.ts                 # React-i18next language configuration.
