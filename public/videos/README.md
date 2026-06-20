# Vidéos des documentaires

Dépose ici les extraits vidéo de chaque documentaire avec les noms exacts suivants.
Chaque vidéo apparaîtra automatiquement sur la home dans la grille des films.

**Format recommandé** : MP4 (H.264), 10-30 secondes, max 5 Mo, sans son (le son est coupé sur la home), résolution 720p ou 1080p.

## Fichiers attendus

- `marseille-pagnol-netflix.mp4` — De Pagnol à Netflix : Marseille, le mythe du rêve hollywoodien
- `bataille-de-marseille.mp4` — La Bataille de Marseille
- `madagascar-ia.mp4` — Madagascar : les petites mains de l'IA
- `maxime-frederic.mp4` — Maxime Frédéric : le chef du Cheval Blanc
- `chambon-sur-lignon.mp4` — Le Chambon-sur-Lignon, un legs pour l'Histoire
- `surtourisme-provence.mp4` — Surtourisme : la Provence peut-elle accueillir toute la richesse du monde ?

## Si une vidéo manque

Pas de panique : un fond dégradé bleu marine s'affiche par défaut tant que la vidéo n'est pas présente. Dès que tu poses le fichier ici, il apparaît automatiquement.

## Compression rapide (si besoin)

Pour compresser une vidéo trop lourde, depuis le terminal Mac :
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an -vf "scale=-2:720" output.mp4
```
(retire `-an` si tu veux garder le son)
