# Conectados - Plataforma de Chat y Video para Jugadores

Plataforma web para que los jugadores se conecten online mediante chat y video en tiempo real.

## Características

- 🎮 Sistema de canales para crear y unirse a salas
- 💬 Chat en tiempo real
- 📹 Video en tiempo real
- 👤 Almacenamiento de usuarios por nombre (sin login formal)
- 🎨 Diseño moderno con Tailwind CSS

## Tecnologías

- **Astro** - Framework principal
- **React** - Componentes interactivos
- **Supabase** - Base de datos y tiempo real
- **Tailwind CSS** - Estilos
- **WebRTC** - Video en tiempo real

## Setup

1. Instala las dependencias:
```bash
npm install
```

2. Configura Supabase:
   - Crea un proyecto en Supabase
   - Copia las variables de entorno en `.env`:
     ```
     PUBLIC_SUPABASE_URL=tu_url_de_supabase
     PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon
     ```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:4321](http://localhost:4321)

## Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)

2. Ve al SQL Editor en tu proyecto Supabase

3. Copia y ejecuta el contenido del archivo `supabase-setup.sql` que incluye:
   - Creación de tablas (channels, channel_users, messages)
   - Índices para optimización
   - Habilitación de Realtime
   - Políticas de seguridad (RLS)

4. Obtén tus credenciales:
   - Ve a Settings → API
   - Copia la "Project URL" y la "anon public" key

5. Crea un archivo `.env` en la raíz del proyecto:
   ```
   PUBLIC_SUPABASE_URL=tu_project_url
   PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
   ```

## Estructura del Proyecto

```
.
├── src/
│   ├── components/      # Componentes React
│   │   ├── App.tsx      # Componente principal
│   │   ├── ChannelList.tsx
│   │   ├── ChannelView.tsx
│   │   ├── Chat.tsx
│   │   └── VideoRoom.tsx
│   ├── lib/
│   │   └── supabase.ts  # Cliente de Supabase
│   └── pages/
│       └── index.astro  # Página principal
├── supabase-setup.sql   # Script de configuración
└── package.json
```

## Uso

1. Ingresa tu nombre de usuario cuando se solicite (se guarda en localStorage)
2. Crea un canal o selecciona uno existente
3. Cambia entre Chat y Video usando las pestañas
4. Comparte el enlace del canal con otros jugadores

