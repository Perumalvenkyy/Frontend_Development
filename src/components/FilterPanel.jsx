import React from 'react'


export default function FilterPanel({categories,category,setCategory,sort,setSort,maxPrice,setMaxPrice}){
return (
<div className="flex flex-wrap gap-3 items-center mt-4">
<select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 rounded bg-slate-800 border border-slate-700">
{categories.map(c=> <option key={c} value={c}>{c}</option>)}
</select>


<select value={sort} onChange={e=>setSort(e.target.value)} className="px-3 py-2 rounded bg-slate-800 border border-slate-700">
<option value="popular">Sort: Popular</option>
<option value="price-asc">Price: Low → High</option>
<option value="price-desc">Price: High → Low</option>
<option value="rating">Sort: Rating</option>
</select>


<div className="flex items-center gap-2">
<label className="text-sm text-slate-400">Max price</label>
<input type="range" min="10" max="300" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))} />
<div className="text-sm text-slate-300">${maxPrice}</div>
</div>
</div>
)
}