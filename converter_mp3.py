import eel
from pytube import YouTube
import os
import requests
import re
from pathlib import Path

path = "Musique_telecharger/"

eel.init('web')

@eel.expose

def App(data):
    # p = Path("Musique_telecharger/text.txt")
    yt = YouTube(data)
    file = str()
    title = yt.streams[0].title.replace("'","")
    file = Path(path+title+".mp3")

    if file.exists():
        return True
    else :
        t = yt.streams.filter(only_audio=True).first().download(path)
        s = t.replace('.mp4','')
        os.rename(t, s+'.mp3')        
           
  
eel.start('index.html',size=(500,600), port=8000)