import React from 'react'


export default function Header({query,setQuery,favCount}){
return (
<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-slate-900">PF</div>
<div>
<h1 className="text-xl font-semibold">Product Frontend - Mock Data</h1>
<p className="text-sm text-slate-400">Responsive UI • Tailwind • Mock JSON</p>
</div>
</div>


<div className="flex items-center gap-3">
<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." className="px-3 py-2 rounded-lg bg-slate-800 text-slate-100 border border-slate-700" />
<button className="px-3 py-2 rounded-lg bg-cyan-400 text-slate-900 font-semibold">Reset</button>
<button title="favorites" className="px-3 py-2 rounded-lg border border-slate-700">❤ {favCount}</button>
</div>
</header>
)
}