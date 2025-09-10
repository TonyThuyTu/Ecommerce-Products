"use client";
import { useState } from "react";
import ProductDescriptionEditor from "../tinymceEditor/textEditor";

export default function AddDescription({ onDescriptionChange, initialValue = "" }) {
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState(initialValue);

  const handleShortDescriptionChange = (e) => {
    const value = e.target.value;
    setShortDescription(value);
    
    // Pass both descriptions to parent component
    if (onDescriptionChange) {
      onDescriptionChange({
        shortDescription: value,
        fullDescription: fullDescription
      });
    }
  };

  const handleFullDescriptionChange = (content) => {
    setFullDescription(content);
    
    // Pass both descriptions to parent component
    if (onDescriptionChange) {
      onDescriptionChange({
        shortDescription: shortDescription,
        fullDescription: content
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Product Description</h2>
      
      <div className="space-y-6">
        {/* Short Description */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Description
          </label>
          <textarea
            value={shortDescription}
            onChange={handleShortDescriptionChange}
            placeholder="Add Description"
            rows={3}
            maxLength={200}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Used for product cards and search results</span>
            <span>{shortDescription.length}/200</span>
          </div>
        </div> */}

        {/* Full Description with TinyMCE */}
        <div>
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Product Description
          </label> */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ProductDescriptionEditor
              initialValue={fullDescription}
              onContentChange={handleFullDescriptionChange}
              height={400}
              apiKey="ugol5zkoya8hjpj58cvcxpe5rpx9h887uxbe6hfrijrdn360" // Replace with your actual API key
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Create description for products with Tinymce and friendly SEO.
          </p>
        </div>

        {/* Quick Templates */}
        {/* <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h3>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleFullDescriptionChange(`
                <h2>Product Overview</h2>
                <p>Write a compelling overview of your product here...</p>
                
                <h2>Key Features</h2>
                <ul class="feature-list">
                  <li>Feature 1 - Description</li>
                  <li>Feature 2 - Description</li>
                  <li>Feature 3 - Description</li>
                </ul>
                
                <h2>Why Choose This Product</h2>
                <p>Explain what makes this product special...</p>
              `)}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
            >
              📝 Basic Template
            </button>
            
            <button
              type="button"
              onClick={() => handleFullDescriptionChange(`
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
                      <td>Enter dimensions</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>Enter weight</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>Enter material</td>
                    </tr>
                  </tbody>
                </table>
              `)}
              className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
            >
              📊 Specs Table
            </button>
            
            <button
              type="button"
              onClick={() => handleFullDescriptionChange(`
                <div class="feature-highlight">
                  <h3>🌟 Special Feature</h3>
                  <p>Highlight your product's most important selling point here.</p>
                </div>
                
                <h2>What's Included</h2>
                <ul>
                  <li>Main product</li>
                  <li>User manual</li>
                  <li>Warranty card</li>
                  <li>Accessories (if any)</li>
                </ul>
              `)}
              className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors"
            >
              ⭐ Highlight Box
            </button>
            
            <button
              type="button"
              onClick={() => setFullDescription("")}
              className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
            >
              🗑️ Clear All
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}