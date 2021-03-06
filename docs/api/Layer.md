---
title: Layer
order: 202
section: components
---

A Sketch layer. This is the base class for most of the Sketch components and defines methods to manipulate them..

| Properties                                                 |                                                                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the Layer.                                                                     |
| name<span class="arg-type">string</span>                   | The name of the Layer                                                                           |
| parent<span class="arg-type">[Group](#group)</span>        | The group the layer is in.                                                                      |
| locked<span class="arg-type">boolean</span>                | If the layer is locked.                                                                         |
| hidden<span class="arg-type">hidden</span>                 | If the layer is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Layer. This is given in coordinates that are local to the parent of the layer. |
| selected<span class="arg-type">boolean</span>              | If the layer is selected.                                                                       |
| flow<span class="arg-type">[Flow](#flow)</span>            | The prototyping action associated with the layer.                                               |

## Duplicate the Layer

```javascript
var duplicatedLayer = layer.duplicate()
```

A new identical layer will be inserted into the parent of this layer.

### Returns

A new [Layer](#layer).

## Remove the Layer

```javascript
layer.remove()
```

Remove this layer from its parent.

### Returns

The current layer (useful if you want to chain the calls).

## Get the position in the hierarchy

```javascript
var index = layer.index
```

The index of this layer in its parent. The layer at the back of the parent (visually) will be layer `0`. The layer at the front will be layer `n - 1` (if there are `n` layers).

## Move the Layer in the hierarchy

### Move to the front

```javascript
layer.moveToFront()
```

Move this layer to the front of its parent.

#### Returns

The current layer (useful if you want to chain the calls).

### Move forward

```javascript
layer.moveForward()
```

Move this layer forward in its parent.

#### Returns

The current layer (useful if you want to chain the calls).

### Move to the back

```javascript
layer.moveToBack()
```

Move this layer to the back of its parent.

#### Returns

The current layer (useful if you want to chain the calls).

### Move backward

```javascript
layer.moveBackward()
```

Move this layer backward in its parent.

#### Returns

The current layer (useful if you want to chain the calls).

## localRectToPageRect

```javascript
var rectDefinedInPageCoordinates = layer.localRectToPageRect(
  rectDefinedInLocalCoordinates
)
```

Convert a rectangle in the coordinates that this layer uses to absolute (page) coordinates.

| Parameters                                                           |                          |
| -------------------------------------------------------------------- | ------------------------ |
| rect<span class="arg-type">[Rectangle](#rectangle) - required</span> | The rectangle to convert |

### Returns

A [Rectangle](#rectangle) in page coordinates.

## localRectToParentRect

```javascript
var rectDefinedInParentCoordinates = layer.localRectToParentRect(
  rectDefinedInLocalCoordinates
)
```

Convert a rectangle in the coordinates that this layer uses to its parent's coordinates.

| Parameters                                                           |                          |
| -------------------------------------------------------------------- | ------------------------ |
| rect<span class="arg-type">[Rectangle](#rectangle) - required</span> | The rectangle to convert |

### Returns

A [Rectangle](#rectangle) in the layer's parent's coordinates.
