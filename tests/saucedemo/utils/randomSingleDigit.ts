// Utilidades para generar datos aleatorios para pruebas
export namespace RandomUtils {
    /** Devuelve un dígito aleatorio entre 0 y 9 */
    export const getRandomSingleDigit = (): number => Math.floor(Math.random() * 10);

    /** Devuelve un dígito aleatorio como string */
    export const getRandomSingleDigitString = (): string => getRandomSingleDigit().toString();

    /** Devuelve un número aleatorio entre min y max (ambos incluidos) */
    export const getRandomNumber = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    /** Devuelve un string de dígitos aleatorios de la longitud indicada */
    export const getRandomDigitString = (length: number): string =>
        Array.from({ length }, getRandomSingleDigit).join('');

    /** Devuelve un número de celular colombiano aleatorio (10 dígitos, inicia con 3) */
    export const getRandomPhoneNumber = (): string => '3' + getRandomDigitString(9);

    /** Devuelve una dirección aleatoria */
    export const getRandomAddress = (): string => {
        const tiposVia = ['Calle', 'Carrera', 'Avenida', 'Transversal', 'Diagonal'];
        const tipo = getRandomElement(tiposVia);
        const numeroPrincipal = getRandomNumber(1, 150);
        const numeroSecundario = getRandomNumber(1, 100);
        const numeroAdicional = getRandomNumber(1, 99);
        return `${tipo} ${numeroPrincipal} #${numeroSecundario}-${numeroAdicional}`;
    };

    /** Devuelve un email aleatorio con dominio gmail.com */
    export const getRandomEmail = (): string => {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let username = '';
        for (let i = 0; i < 8; i++) {
            username += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return `${username}@gmail.com`;
    };

    /** Devuelve una descripción aleatoria de cliente */
    export const getRandomDescription = (): string => {
        const descripciones = [
            'Cliente potencial para nuevos productos.',
            'Solicita información adicional.',
            'Requiere seguimiento personalizado.',
            'Cliente frecuente, trato preferencial.',
            'Pendiente de verificación de datos.',
            'Interesado en promociones.',
            'Solicitó llamada de confirmación.',
            'Observación agregada automáticamente.'
        ];
        return getRandomElement(descripciones);
    };

    /** Devuelve un elemento aleatorio de un array */
    export const getRandomElement = <T>(arr: T[]): T =>
        arr[Math.floor(Math.random() * arr.length)];
}
