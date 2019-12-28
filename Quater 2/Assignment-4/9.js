let str = '<p><strong><em>Only print this</em></strong></p>' 

document.getElementById('output').innerHTML = str.replace(/<[^>]*>/g, '')