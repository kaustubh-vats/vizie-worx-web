import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { VizieWorx } from 'vizie-worx'
import { use, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import "highlight.js/styles/atom-one-dark.css";

export default function Home() {
  const codeRef = useRef<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const codeDivRef = useRef<HTMLDivElement>(null);
  const codeDivInstallRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(codeDivRef.current) {
      hljs.registerLanguage('javascript', javascript);
      hljs.highlightElement(codeDivRef.current);
    }
    if(codeDivInstallRef.current) {
      hljs.registerLanguage('bash', bash);
      hljs.highlightElement(codeDivInstallRef.current);
    }
  }, [codeDivRef, codeDivInstallRef]);

  const onCodeUpdate = (style: string, code: string) => {
    codeRef.current = "<style>" + style + "</style>\n" + code;
  }

  useEffect(() => {
    if (!success && !error) {
      return;
    }
    const timeout = setTimeout(() => {
      setSuccess('');
      setError('');
    }, 2500);
    return () => clearTimeout(timeout);
  }, [success, error])

  const onCodeShow = () => {
    navigator.clipboard.writeText(codeRef.current).then(() => {
      if (success) {
        return;
      }
      setError('');
      setSuccess("Copied Successfully")
    }, (error) => {
      if (error) {
        return;
      }
      setSuccess('');
      setError('Failed to copy');
    }).catch(()=>{
      if (error) {
        return;
      }
      setSuccess('');
      setError('Failed to copy');
    });
  }

  return (
    <>
      <Head>
        <title>VizieWorx</title>
        
        <meta charSet="UTF-8" />
        <meta name="description" content="UI component library for react, to let the end user design and export the designs to html and css code" />
        <meta name="title" content="VizieWorx - Visualize the work" />
        <meta name="author" content="Kaustubh Vats" />
        <meta name="country" content="IN" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#0AB6FF"/>
        <meta name="keywords" content="UI library, react, design, html, design to html, plugin, vizie worx" />
        
        {/* <!-- Facebook meta tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VizieWorx - Visualize the work" />
        <meta property="og:description" content="UI component library for react, to let the end user design and export the designs to html and css code" />
        <meta property="og:image" content="https://vizie-worx.kaustubhvats.in/images/ss.jpeg" />
        <meta property="og:url" content="https://vizie-worx.kaustubhvats.in/" />

        {/* <!-- twitter meta tags --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://vizie-worx.kaustubhvats.in/"/>
        <meta property="twitter:title"
            content="VizieWorx - Visualize the work"/>
        <meta property="twitter:description"
            content="UI component library for react, to let the end user design and export the designs to html and css code"/>
        <meta property="twitter:image"
            content="https://vizie-worx.kaustubhvats.in/images/ss.jpeg"/>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.vwx__container}>
          <div className={styles.vwx__wrapper}>
            <VizieWorx
              onUpdateCode={onCodeUpdate}
            />
            <button className={styles.copy_btn} type='button' onClick={onCodeShow}>Copy Code</button>
          </div>
          <div className={styles.vizi_worx__hero}>
            <div>Vizie Worx Vizie Worx</div>
            <div>Vizie Worx Vizie Worx</div>
            <div>Vizie Worx Vizie Worx</div>
            <div>Vizie Worx Vizie Worx</div>
            <div>Vizie Worx Vizie Worx</div>
          </div>
        </div>
        <div className={styles.about__container}>
          <h2>What is VizieWorx</h2>
          <p>VizieWorx  is a powerful UI component library that empowers users to design and export stunning interfaces effortlessly. Whether you&apos;re a seasoned developer or just starting, our library provides an intuitive and feature-rich environment to create beautiful HTML designs with ease.</p>
          <h3>Key Features</h3>
          <ul>
            <li><strong>Drag-and-Drop Interface: </strong>Seamlessly drag and drop components onto the canvas, allowing for a fluid and interactive design experience.</li>
            <li><strong>Rich Component Library: </strong>Choose from a comprehensive collection of pre-built components, including buttons, forms, cards, and more, to expedite your design process.</li>
            <li><strong>Customization at Your Fingertips: </strong>Effortlessly customize styles, colors, and layouts to match your brand or project requirements. Our library gives you complete control over every aspect of your design.</li>
            <li><strong>Real-Time Preview: </strong>Witness your design come to life with our real-time preview feature. Instantly visualize how your components will appear and behave.</li>
            <li><strong>Export to HTML: </strong>With a single click, export your design to clean and optimized HTML code. Integration with your projects has never been this straightforward.</li>
            <li><strong>Responsive Design: </strong>Ensure your designs look stunning on all devices. Our library supports responsive design principles, making it easy to create interfaces that adapt to various screen sizes.</li>
          </ul>
          <p>Transform your design ideas into reality with VizieWorx. Explore endless possibilities and streamline your UI development process today!</p>
        </div>
        <div className={styles.usage_details}>
          <h2>Ready to implement in your code?</h2>
          <p>Install the package</p>
          <pre>
            <code ref={codeDivInstallRef} className={styles.code__container}>
              {`npm install vizie-worx`}
            </code>
          </pre>
          <p>Example Usage</p>
          <pre>
            <code ref={codeDivRef} className={styles.code__container}>
              {`import {VizieWorx} from 'vizie-wox'
export default function VizieWorxWrapper() => {
  return (
    <VizieWorx />
  )
}`}
            </code>
          </pre>
          <p>Full documentation is yet to be updated...</p>
        </div>
        <div className={styles.footer}>
          <p>Made by <a rel='noopener' href='https://kaustubhvats.in' target='_blank'>Kaustubh Vats</a></p>
        </div>
        {error && <div className={`${styles.bottom_bar} ${styles.error_bar}`}>{error}</div>}
        {success && <div className={`${styles.bottom_bar} ${styles.success_bar}`}>{success}</div>}
      </main>
    </>
  )
}
