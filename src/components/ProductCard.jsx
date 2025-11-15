import React from 'react'


export default function ProductCard({product,onView,onToggleFav,isFav}){
return (
<div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
<img
  src={product.image}
  alt={product.title}
  onError={(e) => {
    e.currentTarget.onerror = null; // prevent infinite loop
    // simple SVG placeholder data URL
    e.currentTarget.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
        <rect width="100%" height="100%" fill="#0f1724"/>
        <text x="50%" y="50%" fill="#94a3b8" font-family="Arial" font-size="20" text-anchor="middle" alignment-baseline="middle">
          Image unavailable
        </text>
      </svg>
    `);
  }}
  className="w-full h-40 object-cover rounded-md"
/>
<div className="flex justify-between items-start mt-3">
<div>
<h3 className="font-semibold">{product.title}</h3>
<div className="text-sm text-slate-400">{product.category} • ⭐{product.rating}</div>
</div>
<div className="text-lg font-semibold text-slate-200">${product.price}</div>
</div>
<p className="text-slate-400 mt-2 text-sm">{product.desc}</p>
<div className="flex gap-2 mt-3">
<button onClick={onView} className="px-3 py-2 bg-cyan-400 text-slate-900 rounded font-semibold">View</button>
<button onClick={onToggleFav} className="px-3 py-2 border rounded">{isFav ? 'Remove' : 'Add'}</button>
</div>
</div>
)
}