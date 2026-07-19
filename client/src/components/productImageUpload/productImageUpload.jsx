import { useState } from "react";
import { FaCamera } from "react-icons/fa";

function ProductImageUpload() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="md:col-span-2">
      <label className="block mb-3 font-medium">
        Product Image
      </label>

      <div className="flex items-center gap-6 flex-wrap">
        <div className="w-32 h-32 rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden bg-gray-50">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <FaCamera
              className="text-gray-400"
              size={35}
            />
          )}
        </div>

        <label className="bg-blue-600 text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition">
          Choose Image

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />
        </label>
      </div>
    </div>
  );
}

export default ProductImageUpload;