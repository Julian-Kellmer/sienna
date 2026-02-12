// lib/cloudinary.js
const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

export function cld(src, { w, h, crop = 'fill' } = {}) {
  if (!CLOUD) throw new Error('Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME')
  if (!src) throw new Error('Missing src')

  const base = `https://res.cloudinary.com/${CLOUD}/image/upload`

  const parts = [
    'f_auto',
    'q_auto',
    w ? `w_${w}` : null,
    h ? `h_${h}` : null,
    w || h ? `c_${crop}` : null,
  ]
    .filter(Boolean)
    .join(',')

  return `${base}/${parts}/${src}`
}
