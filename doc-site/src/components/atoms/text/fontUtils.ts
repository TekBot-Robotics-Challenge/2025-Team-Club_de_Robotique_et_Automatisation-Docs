const GOLDEN_RATIO = 1.618;
const mobile_m_size = 10;

// Fonction pour extraire le niveau de titre (ex: "h1" -> 1, "h2" -> 2)
// export const extractLevel = (title: string): number => {
//     const level = parseInt(title.replace(/\D/g, ''), 10); // Récupère le numéro du titre
//     const realLevel = 4 - level;
//     // return isNaN(level) ? 0 : level;
//     return isNaN(realLevel) ? 0 : realLevel;

// };


export const extractLevel = (title: string): number => {
    const level = parseInt(title.replace(/\D/g, ''), 10); // Récupère le numéro du titre
    const realLevel = 5 - level;
    // return isNaN(level) ? 0 : level;
    return isNaN(realLevel) ? 0 : realLevel;

};



// Fonction pour calculer la taille des titres
export const getFontSize = (level: string, baseSize = mobile_m_size) => {
    // Si on reçoit "p", on applique la base directement
    if (level === "p") {
        return `${baseSize}px`;  // Aucun changement pour "p"
    }

    // Calcul basé sur la puissance du nombre d'or (golden ratio)
    const levelNumber = extractLevel(level);
    return `${Math.ceil(baseSize * Math.pow(GOLDEN_RATIO, levelNumber))}px`;
};




export const sizeByScreen = {
    mobile_s: mobile_m_size,
    mobile_m: mobile_m_size + 1,
    mobile_l: mobile_m_size + 2,
    tablet: mobile_m_size + 4,
    laptop: mobile_m_size + 6,
    laptop_l: mobile_m_size + 8,
    desktop: mobile_m_size + 18,
    '4k_screen': mobile_m_size + 20,
};
