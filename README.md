# Spline by Vergil1000

This is a Next.js project that integrates interactive 3D content and custom animations using the Spline tool and Framer Motion. It creates an immersive and dynamic web experience with text animations and 3D models, designed with a visually striking gradient background.

## Features

- **Text Animation**: The text ("輝け、未来") appears with a delay effect using Framer Motion for smooth transitions.
- **3D Spline Integration**: A 3D model created with Spline is embedded and lazily loaded for improved performance.
- **Gradient Backgrounds**: A custom gradient background with a vignette effect that adapts to dark mode.
- **Custom Font Styling**: The project uses the 'Yuji Mai' font from Google Fonts for a unique and authentic design.

## Technologies

- **Next.js**: A React-based framework for building static and dynamic websites.
- **Framer Motion**: A library for animations that provides smooth transitions and effects.
- **Spline**: A tool for building and integrating 3D web content.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Suspense**: Used for loading the 3D scene asynchronously.
- **Google Fonts**: 'Yuji Mai' font for typography styling.

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit:

   ```
   http://localhost:3000
   ```

## How It Works

1. **Text Component**: 
   - The `Text` component renders each character with an animation that fades in with a staggered delay.
   - This is achieved using `motion.div` from Framer Motion.

2. **3D Scene**:
   - The 3D model is loaded lazily using `React.lazy()` for better performance.
   - The model is displayed using the `<Spline>` component wrapped in a `Suspense` component, which shows a fallback loading screen until the 3D model is ready.

3. **Root Layout**:
   - The layout sets the background and font style. It also applies a vignette effect using a custom CSS class.
   - The root font is set to 'Yuji Mai' from Google Fonts, providing a unique typography style to the web page.

4. **Tailwind CSS**:
   - Tailwind is used for styling the overall layout, buttons, and gradients. It provides utility classes for fast and responsive styling.
   - Custom media queries adjust the color scheme based on the user’s preferences (dark mode).

## Structure

- **components/text.js**: Contains the text animation logic using Framer Motion.
- **pages/index.js**: The main page that includes the 3D model and text animations.
- **pages/_app.js**: The global layout and font styling are applied here.
- **styles/globals.css**: Contains custom global styles and tailwind imports.

## Customization

1. **Text**: To change the animated text, simply modify the `text` array in `Text.js` with new characters.
2. **3D Model**: To replace the 3D scene, update the `scene` prop inside the `<Spline>` component with the new Spline URL.
3. **Styling**: You can customize the background gradients, button styles, and animations using Tailwind classes in `globals.css` or directly in JSX.

## Contributing

Feel free to fork the repository and submit pull requests with improvements or bug fixes. If you encounter any issues, open an issue to discuss them.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Spline**: Used for creating interactive 3D models.
- **Framer Motion**: Provides smooth animations for React components.
- **Tailwind CSS**: For rapid styling and utility-first design.

---

Enjoy building your creative and interactive web experiences with this template!