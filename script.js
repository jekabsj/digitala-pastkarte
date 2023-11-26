{\rtf1\ansi\ansicpg1250\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function generatePostcard() \{\
    var message = document.getElementById('message').value;\
\
    if (!message) \{\
        alert('L\uc0\u363 dzu, ieraksti savu nov\u275 l\u275 jumu pirms \u291 ener\u275 \'9aanas!');\
        return;\
    \}\
\
    var postcardImage = document.getElementById('postcardImage');\
    postcardImage.src = 'https://via.placeholder.com/600x400.png?text=' + encodeURIComponent(message);\
    postcardImage.style.display = 'block';\
\}}