#! /bin/sh

IMGDIR=resources/images/headshots
SPRITE=resources/images/headshots.jpg
CSSDIR=resources/css
GEOM_HEAD=68x86+0+0

#montage -geometry ${GEOM_HEAD} ${IMGDIR}/headshots/*.jpg ${IMGDIR}/headshots.jpg
num_images=`ls ${IMGDIR}/*.jpg|wc -l`
geometry=`jpeginfo resources/images/headshots/*.jpg|\
  awk '
BEGIN {
  w=0;
  h=0;
}
/ [0-9][0-9]* x [0-9][0-9]*/ {
  if ($2 > w) {
     w = $2
   }
   if ($4 > h) {
     h = $4;
   }
}
END {
  printf("%dx%d+0+0", w, h);
}'`
montage -tile 1x${num_images} -geometry ${geometry} ${IMGDIR}/*.jpg ${SPRITE}