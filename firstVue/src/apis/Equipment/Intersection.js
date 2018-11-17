import { templateShapePost, templateUploadPost, templateUploadGet } from '../baseUrls'

/**
 * 添加
 */
export function addShape (ob) {
  return templateShapePost('addShape')(ob)
}
/**
 * 查询
 */
export function queryShapeByCrossId (ob) {
  return templateShapePost('queryShapeByCrossId')(ob)
}
/**
 * 上传图片
 */
export function uploadSVGBGPic (e, crossId) {
  let file = e.target.files[0]
  var formdata = new FormData()
  formdata.append('files', file)
  formdata.append('crossId', crossId)
  // console.log(e)
  // console.log(crossId)
  // console.log(file)
  // console.log(formdata)
  // console.log(formdata.get('crossId'))
  return templateUploadPost('pic')(formdata)
}
/**
 * 上传图片
 */
export function deletePic (filename, type, crossId) {
  return templateUploadGet('deletePic/' + crossId + '/' + type + '/' + filename)()
}
export default {
  addShape,
  queryShapeByCrossId,
  uploadSVGBGPic,
  deletePic
}
