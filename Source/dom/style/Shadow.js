import { Color, colorToString } from './Color'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'

export class Shadow extends WrappedObject {
  static toNative(nativeClass, value) {
    const shadow = nativeClass.new()
    const color =
      typeof value === 'string' ? Color.from(value) : Color.from(value.color)
    if (color) {
      shadow.color = color._object
    }
    if (value.blur) {
      shadow.blurRadius = value.blur
    }
    if (value.x) {
      shadow.offsetX = value.x
    }
    if (value.y) {
      shadow.offsetY = value.y
    }
    if (value.spread) {
      shadow.spread = value.spread
    }

    if (typeof value.enabled === 'undefined') {
      shadow.enabled = true
    } else {
      shadow.enabled = value.enabled
    }
    return shadow
  }
}

Shadow.type = Types.Shadow
Shadow[DefinedPropertiesKey] = {}

Shadow.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Shadow.define('blur', {
  get() {
    return Number(this._object.blurRadius())
  },
  set(x) {
    this._object.blurRadius = x
  },
})

Shadow.define('x', {
  get() {
    return Number(this._object.offsetX())
  },
  set(x) {
    this._object.offsetX = x
  },
})

Shadow.define('y', {
  get() {
    return Number(this._object.offsetY())
  },
  set(x) {
    this._object.offsetY = x
  },
})

Shadow.define('spread', {
  get() {
    return Number(this._object.spread())
  },
  set(x) {
    this._object.spread = x
  },
})

Shadow.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color._object
  },
})

Shadow.define('enabled', {
  get() {
    return !!this._object.enabled
  },
  set(enabled) {
    this._object.enabled = enabled
  },
})
