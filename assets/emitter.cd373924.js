function f(t){return{all:t=t||new Map,on:function(e,a){var i=t.get(e);i?i.push(a):t.set(e,[a])},off:function(e,a){var i=t.get(e);i&&(a?i.splice(i.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var i=t.get(e);i&&i.slice().map(function(c){c(a)}),(i=t.get("*"))&&i.slice().map(function(c){c(e,a)})}}}var n=f();export{n as e};