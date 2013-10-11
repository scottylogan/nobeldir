#! /bin/sh

IMGDIR=resources/images/photos
SPRITE=resources/images/photos.jpg
CSSDIR=resources/css
GEOM_HEAD=180x277+0+0

num_images=`ls ${IMGDIR}/*.jpg|wc -l|sed 's/ //g'`
geometry=`jpeginfo ${IMGDIR}/*.jpg|\
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
echo montage -tile 1x${num_images} -geometry ${geometry} ${IMGDIR}/*.jpg ${SPRITE}
