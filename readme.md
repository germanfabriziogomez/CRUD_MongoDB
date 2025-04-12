# CRUD de Productos con MongoDB + TypeScript + Mongoose

Este proyecto implementa un **CRUD básico** (Create, Read, Update, Delete) para gestionar productos utilizando **MongoDB**, **Mongoose** y **TypeScript**.

###### ✍️ Autor: German Fabrizio Gomez
---

## 📦 Estructura del Producto

El sistema se basa en la siguiente interfaz de producto:

```
interface Product extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
}
```

🚀 Funcionalidades
#### 1. Crear Productos 🛠️✨
Este método permite agregar un nuevo producto a la base de datos. Los parámetros necesarios son:

***name***: Nombre del producto.

***description***: Descripción del producto.

***price***: Precio del producto.

***stock***: Cantidad de unidades disponibles.

***category_id***: ID de la categoría a la que pertenece el producto.

Ejemplo de invocacion:

```
createProduct("Celular","Samsung Galaxy A3", 130, 4, 20);
```

#### 2. Leer Productos 📖🔍
Este método permite leer un producto de la base de datos. El único parámetro necesario es su id.

Ejemplo de invocacion:

```
readProduct("67f9adf03e878dcd558c34a9");
```

#### 3. Actualizar Productos ✏️🔄
Este método permite actualizar un producto de la base de datos, respetando siempre su esquema. El único parámetro necesario es su id.

Ejemplo de invocacion:

```
updateProduct("67f9adf03e878dcd558c34a9");
```

#### 4. Eliminar Producto ❌🗑️
Este método permite eliminar un producto de la base de datos. También recibe su id como su único parámetro.

Ejemplo de invocacion:

```
deleteProduct("67f9adf03e878dcd558c34a9");
```

📁 Estructura del Proyecto
```
/config         → Configuración de la base de datos (mongo.ts)
/controllers    → Funciones CRUD (createProduct, readProduct, updateProduct, deleteProduct)
/models         → Esquema del producto
index.ts        → Punto de entrada principal
.env            → Variables de entorno (con la URI de MongoDB)
```


