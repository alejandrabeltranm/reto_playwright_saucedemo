# Prueba Playwright Siigo

Proyecto de automatizacion de pruebas usando Playwright y TypeScript para Siigo.

## Requisitos previos

- Node.js version 16 o superior
- npm o yarn

## Instalacion

1. Instalar dependencias:
```
npm install
```

2. Instalar navegadores de Playwright:
```
npx playwright install
```

## Ejecucion de pruebas

### Ejecutar todas las pruebas (modo headless):
```
npm test
```

### Ejecutar pruebas con navegador visible:
```
npm run test:headed
```

### Ejecutar pruebas en modo debug:
```
npm run test:debug
```

### Ver reporte de resultados:
```
npx playwright show-report
```

## Comandos adicionales

### Ejecutar prueba especifica:
```
npx playwright test nombre-del-archivo.spec.ts
```