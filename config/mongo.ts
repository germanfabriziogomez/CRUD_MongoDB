import mongoose from "mongoose"		

//Leo la variable de entorno
process.loadEnvFile()

	const path = process.env.URI_DB || ""

	const connectDB = async () => {
		
		try{
			await mongoose.connect(path)	
			console.log("Conectado a MongoDB correctamente")
		} catch(error:any) {
			console.log("Error al conectarse a la base de datos", error.message)
		}
	}

export {connectDB}