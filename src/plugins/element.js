import {
  ElButton,
  ElAutocomplete,
  ElAffix,
  ElTooltip,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElContainer,
  ElPageHeader,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElTable,
  ElTableColumn,
  ElDivider,
  ElInput,
  ElFormItem,
  ElForm,
  ElInputNumber,
  ElSwitch,
  ElUpload,
  ElImage
} from 'element-plus'
import lang from 'element-plus/es/locale/lang/zh-cn'
import { use as localeUse } from 'element-plus/es/locale'

export default (app) => {
  localeUse(lang)
  app.use(ElButton)
  app.use(ElAutocomplete)
  app.use(ElAffix)
  app.use(ElTooltip)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElContainer)
  app.use(ElPageHeader)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElSubmenu)
  app.use(ElMenuItemGroup)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElDivider)
  app.use(ElInput)
  app.use(ElFormItem)
  app.use(ElForm)
  app.use(ElInputNumber)
  app.use(ElSwitch)
  app.use(ElUpload)
  app.use(ElImage)
}
