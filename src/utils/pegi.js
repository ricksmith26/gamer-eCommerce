export const getPegi = (pegi) => {
    if (pegi === 3) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi3.png';
    }
    if (pegi === 7) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi7.png';
    }
    if (pegi === 12) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi12.png';
    }
    if (pegi === 16) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi16.png';
    }
    else {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi18.png';
    }
}