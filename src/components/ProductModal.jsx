import React, { useEffect } from 'react'


export default function ProductModal({product,onClose,onToggleFav,isFav}){
useEffect(()=>{
function onKey(e){ if(e.key==='Escape') onClose() }
window.addEventListener('keydown', onKey)
return ()=> window.removeEventListener('keydown', onKey)
},[onClose])


return (
<div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
<div onClick={e=>e.stopPropagation()} className="bg-slate-900 rounded-lg p-4 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
<img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded" />
<div>
<h2 className="text-2xl font-semibold">{product.title}</h2>
<div className="text-slate-400">{product.category} • ⭐{product.rating} • ${product.price}</div>
<p className="mt-3 text-slate-300">{product.desc}</p>
<div className="flex gap-2 mt-4">
<button className="px-3 py-2 bg-cyan-400 text-slate-900 rounded">Buy now</button>
<button onClick={onToggleFav} className="px-3 py-2 border rounded">{isFav? 'Remove from favorites' : 'Add to favorites'}</button>
<button onClick={onClose} className="px-3 py-2 border rounded">Close</button>
</div>
</div>
</div>
</div>
)
}