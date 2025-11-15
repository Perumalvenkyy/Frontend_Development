import React, { useMemo, useState } from 'react'
import productsData from './data/products.json'
import Header from './components/Header'
import FilterPanel from './components/FilterPanel'
import ProductCard from './components/ProductCard'
import ProductModal from './components/ProductModal'


export default function App(){
const [query,setQuery] = useState('')
const [category,setCategory] = useState('All')
const [sort,setSort] = useState('popular')
const [maxPrice,setMaxPrice] = useState(300)
const [favorites,setFavorites] = useState(()=>{
try{ return JSON.parse(localStorage.getItem('favorites')||'[]') }catch(e){return []}
})
const [selected,setSelected] = useState(null)


const categories = useMemo(()=>['All',...Array.from(new Set(productsData.map(p=>p.category)))],[])


const filtered = useMemo(()=>{
let res = productsData.filter(p => p.price <= maxPrice && (category==='All' || p.category===category) && (p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase())) )
if(sort==='price-asc') res = res.sort((a,b)=>a.price-b.price)
if(sort==='price-desc') res = res.sort((a,b)=>b.price-a.price)
if(sort==='rating') res = res.sort((a,b)=>b.rating-a.rating)
return res
},[query,category,sort,maxPrice])


function toggleFav(id){
setFavorites(prev=>{
const next = prev.includes(id)? prev.filter(x=>x!==id) : [...prev,id]
localStorage.setItem('favorites', JSON.stringify(next))
return next
})
}


return (
<div className="max-w-6xl mx-auto p-6">
<Header query={query} setQuery={setQuery} favCount={favorites.length} />
<FilterPanel categories={categories} category={category} setCategory={setCategory} sort={sort} setSort={setSort} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />


<h2 className="text-slate-300 mt-6">{filtered.length} results</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
{filtered.map(p => (
<ProductCard key={p.id} product={p} onView={() => setSelected(p)} onToggleFav={() => toggleFav(p.id)} isFav={favorites.includes(p.id)} />
))}
</div>


{selected && <ProductModal product={selected} onClose={() => setSelected(null)} onToggleFav={() => toggleFav(selected.id)} isFav={favorites.includes(selected.id)} />}
</div>
)
}