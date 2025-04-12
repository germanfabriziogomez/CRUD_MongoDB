# CRUD de Productos con MongoDB + TypeScript + Mongoose

Este proyecto implementa un **CRUD básico** (Create, Read, Update, Delete) para gestionar productos utilizando **MongoDB**, **Mongoose** y **TypeScript**.

###### ✍️ Autor: German Fabrizio Gomez
---

### 📦 Estructura del Producto

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

### 🚀 Funcionalidades
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

### Instrucciones para ejecutar el proyecto:

###### ***Observacion: Antes que nada, deberas tener instalado **Node** en tu computadora***

1. Clonar el repositorio en tu computadora de forma local

```bash
git clone https://github.com/germanfabriziogomez/CRUD_MongoDB
```

2. Acceder a la ruta de la carpeta donde fue clonado el proyecto

```bash
cd <ruta_donde_lo_clonaste>

```
3. Configurar tu variable de entorno ***.env*** 

4. Ejecutar el proyecto

```bash
npm run start
```

***Cada vez que modifiques el codigo, ya sea para hacer una inserción de un producto, leerlo, actualizarlo o borrarlo, debes volver a compilar el proyecto, haciendo:***
```bash
npm run build
```
***y luego si hacer:***
```bash
npm run start
````

