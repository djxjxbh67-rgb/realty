
import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { Loader2, RefreshCw } from 'lucide-react';

interface GeneratedImageProps {
  prompt: string;
  aspectRatio?: '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
  className?: string;
  alt?: string;
  fallbackUrl?: string;
}

const GeneratedImage: React.FC<GeneratedImageProps> = ({ 
  prompt, 
  aspectRatio = '1:1', 
  className = '', 
  alt = 'AI Generated Image',
  fallbackUrl = 'https://picsum.photos/800/600'
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchImage = async () => {
    setLoading(true);
    setError(false);
    const url = await generateImage(prompt, aspectRatio);
    if (url) {
      setImageUrl(url);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImage();
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-100 animate-pulse ${className}`}>
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-2" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Генерация AI...</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`relative group ${className}`}>
        <img src={fallbackUrl} alt={alt} className="w-full h-full object-cover opacity-50 grayscale" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <p className="text-xs font-bold text-slate-500 mb-2">Не удалось сгенерировать изображение</p>
          <button 
            onClick={fetchImage}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-indigo-50 transition-colors"
          >
            <RefreshCw size={16} className="text-indigo-600" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={`w-full h-full object-cover ${className}`} 
    />
  );
};

export default GeneratedImage;
