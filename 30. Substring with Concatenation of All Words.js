

const findSubstring=(t,e)=>{let l=[];if(0==t.length||0==e.length)return l;let r=e.length,n=e[0].length,f={};for(let t of e)f[t]?f[t]++:f[t]=1;for(let e=0;e<=t.length-r*n;e++){let g={},h=0;for(h=0;h<r;h++){let l=t.substr(e+h*n,n);if(!f[l])break;if(g[l]?g[l]++:g[l]=1,g[l]>f[l])break}h==r&&l.push(e)}return l};
