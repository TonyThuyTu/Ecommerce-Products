// utils/tinymceConfig.js

/**
 * TinyMCE Configuration for Product Descriptions
 * Centralized configuration for consistent editor setup across the app
 */

// Base plugins for all editors
export const basePlugins = [
  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
  'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
  'emoticons', 'codesample'
];

// Toolbar configurations
export const toolbarConfigs = {
  full: 'undo redo | blocks | ' +
        'bold italic forecolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | image media link | table | productspecs | template | code preview | help',
  
  simple: 'undo redo | bold italic | bullist numlist | link | removeformat',
  
  product: 'undo redo | blocks | ' +
           'bold italic forecolor backcolor | alignleft aligncenter alignright | ' +
           'bullist numlist | link image | table productspecs | fullscreen'
};

// Content styling
export const contentStyle = `
  body { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    max-width: none;
  }
  
  img { 
    max-width: 100%; 
    height: auto; 
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  table { 
    border-collapse: collapse; 
    width: 100%; 
    margin: 16px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  th, td { 
    border: 1px solid #e1e5e9; 
    padding: 12px 16px; 
    text-align: left; 
  }
  
  th { 
    background-color: #f8f9fa; 
    font-weight: 600;
    color: #495057;
  }
  
  .highlight-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .feature-highlight {
    background-color: #e8f5e8;
    border-left: 4px solid #28a745;
    padding: 16px;
    margin: 16px 0;
    border-radius: 0 8px 8px 0;
  }
  
  .price-callout {
    background-color: #fff3cd;
    border: 2px solid #ffc107;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  h1, h2, h3, h4 {
    color: #2c3e50;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  
  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.3em; }
  h4 { font-size: 1.1em; }
`;

// Style formats for product descriptions
export const styleFormats = [
  {
    title: 'Product Headings',
    items: [
      { title: 'Product Title', block: 'h1' },
      { title: 'Section Heading', block: 'h2' },
      { title: 'Feature Heading', block: 'h3' },
      { title: 'Sub-feature', block: 'h4' }
    ]
  },
  {
    title: 'Product Elements',
    items: [
      {
        title: 'Highlight Box',
        block: 'div',
        classes: 'highlight-box',
        wrapper: true
      },
      {
        title: 'Feature Highlight',
        block: 'div',
        classes: 'feature-highlight',
        wrapper: true
      },
      {
        title: 'Price Callout',
        block: 'div',
        classes: 'price-callout',
        wrapper: true
      },
      {
        title: 'Feature List',
        selector: 'ul',
        classes: 'feature-list'
      }
    ]
  },
  {
    title: 'Text Styles',
    items: [
      {
        title: 'Price Text',
        inline: 'span',
        styles: { color: '#e91e63', 'font-weight': 'bold', 'font-size': '1.2em' }
      },
      {
        title: 'Highlight Text',
        inline: 'span',
        styles: { 'background-color': '#ffeb3b', padding: '2px 4px', 'border-radius': '3px' }
      },
      {
        title: 'Success Text',
        inline: 'span',
        styles: { color: '#28a745', 'font-weight': 'bold' }
      }
    ]
  }
];

// Product description templates
export const productTemplates = [
  {
    title: 'Basic Product Description',
    description: 'Simple product description layout',
    content: `
      <h2>Product Overview</h2>
      <p>Write a compelling overview of your product here. Highlight the main benefits and what makes it special.</p>
      
      <h2>Key Features</h2>
      <ul class="feature-list">
        <li>Feature 1 - Brief description</li>
        <li>Feature 2 - Brief description</li>
        <li>Feature 3 - Brief description</li>
      </ul>
      
      <h2>Why Choose This Product</h2>
      <p>Explain the unique value proposition and why customers should choose this product.</p>
    `
  },
  {
    title: 'Detailed Product Description',
    description: 'Comprehensive product description with specifications',
    content: `
      <h1>Product Name</h1>
      
      <div class="feature-highlight">
        <p><strong>Key Selling Point:</strong> Write your main selling point here to grab attention immediately.</p>
      </div>
      
      <h2>Product Overview</h2>
      <p>Detailed description of what the product is and who it's for...</p>
      
      <h2>Features & Benefits</h2>
      <ul class="feature-list">
        <li><strong>Feature 1:</strong> Benefit explanation</li>
        <li><strong>Feature 2:</strong> Benefit explanation</li>
        <li><strong>Feature 3:</strong> Benefit explanation</li>
        <li><strong>Feature 4:</strong> Benefit explanation</li>
      </ul>
      
      <h2>Technical Specifications</h2>
      <table>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimensions</td>
            <td>Length × Width × Height</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>Product weight</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>Materials used</td>
          </tr>
          <tr>
            <td>Color Options</td>
            <td>Available colors</td>
          </tr>
        </tbody>
      </table>
      
      <h2>What's Included</h2>
      <ul>
        <li>Main product</li>
        <li>Accessories (if any)</li>
        <li>User manual</li>
        <li>Warranty information</li>
      </ul>
      
      <div class="price-callout">
        <p>Special Offer: Add your promotional message here!</p>
      </div>
    `
  },
  {
    title: 'Tech Product Description',
    description: 'Template for electronics and tech products',
    content: `
      <h1>Product Name - Model Number</h1>
      
      <div class="highlight-box">
        <h3>🚀 Latest Technology</h3>
        <p>Highlight the cutting-edge technology or innovation in this product.</p>
      </div>
      
      <h2>Key Specifications</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Processor</td>
            <td>Processor details</td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>RAM/Storage details</td>
          </tr>
          <tr>
            <td>Display</td>
            <td>Screen specifications</td>
          </tr>
          <tr>
            <td>Connectivity</td>
            <td>Connection options</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Performance Features</h2>
      <ul class="feature-list">
        <li>High-performance feature 1</li>
        <li>Advanced feature 2</li>
        <li>Smart feature 3</li>
      </ul>
      
      <h2>Compatibility</h2>
      <p>List compatible systems, devices, or requirements...</p>
    `
  }
];

// Custom setup function for TinyMCE
export const setupTinyMCE = (editor) => {
  // Custom button for product specifications table
  editor.ui.registry.addButton('productspecs', {
    text: '📊 Specs',
    tooltip: 'Insert Product Specifications Table',
    onAction: function() {
      editor.insertContent(`
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="border: 1px solid #e1e5e9; padding: 12px 16px; text-align: left; font-weight: 600; color: #495057;">Specification</th>
              <th style="border: 1px solid #e1e5e9; padding: 12px 16px; text-align: left; font-weight: 600; color: #495057;">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Dimensions</td>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Enter dimensions</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Weight</td>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Enter weight</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Material</td>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Enter material</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Color Options</td>
              <td style="border: 1px solid #e1e5e9; padding: 12px 16px;">Available colors</td>
            </tr>
          </tbody>
        </table>
      `);
    }
  });

  // Custom button for feature highlight box
  editor.ui.registry.addButton('featurebox', {
    text: '✨ Feature',
    tooltip: 'Insert Feature Highlight Box',
    onAction: function() {
      editor.insertContent(`
        <div class="feature-highlight">
          <p><strong>Feature Name:</strong> Describe this amazing feature and its benefits for the customer.</p>
        </div>
      `);
    }
  });

  // Custom button for price callout
  editor.ui.registry.addButton('pricecallout', {
    text: '💰 Price',
    tooltip: 'Insert Price Callout Box',
    onAction: function() {
      editor.insertContent(`
        <div class="price-callout">
          <p>Special Price: $XX.XX - Limited Time Offer!</p>
        </div>
      `);
    }
  });
};

// Main configuration function
export const getTinyMCEConfig = (options = {}) => {
  const {
    height = 400,
    toolbar = 'product',
    apiKey = 'ugol5zkoya8hjpj58cvcxpe5rpx9h887uxbe6hfrijrdn360',
    plugins = basePlugins,
    // templates = productTemplates,
    // readonly = false
  } = options;

  return {
    apiKey,
    height,
    menubar: false,
    plugins,
    toolbar: toolbarConfigs[toolbar] || toolbarConfigs.product,
    content_style: contentStyle,
    // readonly,
    
    // SEO and accessibility settings
    image_title: true,
    image_description: true,
    image_dimensions: false,
    image_advtab: true,
    image_uploadtab: true,
    
    // Paste settings for Word documents
    paste_auto_cleanup_on_paste: true,
    paste_enable_default_filters: true,
    paste_word_valid_elements: "b,strong,i,em,h1,h2,h3,h4,h5,h6,p,ol,ul,li,a[href],span,color,font-size,font-color,font-family,mark,table,tr,td,th,div",
    paste_retain_style_properties: "color,font-size,font-family,background-color,text-align",
    
    // Custom formats and templates
    style_formats: styleFormats,
    // templates,
    
    // Image upload handling (customize based on your setup)
    images_upload_handler: function (blobInfo, success, failure) {
      // Implement your image upload logic here
      // For now, we'll create a data URL
      const reader = new FileReader();
      reader.onload = function() {
        success(reader.result);
      };
      reader.readAsDataURL(blobInfo.blob());
    },
    
    // Setup function
    setup: setupTinyMCE,
    
    // Performance settings
    browser_spellcheck: true,
    contextmenu: false,
    
    // UI settings
    skin: 'oxide',
    theme: 'silver',
    
    // Additional toolbar items for product descriptions
    toolbar_mode: 'sliding'
  };
};

// Utility function to clean HTML for SEO
export const cleanHTMLForSEO = (html) => {
  // Remove empty paragraphs and unnecessary whitespace
  return html
    .replace(/<p>&nbsp;<\/p>/g, '')
    .replace(/<p><\/p>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

// Extract text content for meta descriptions
export const extractTextFromHTML = (html, maxLength = 160) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || '';
  return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
};

// Generate SEO-friendly slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};