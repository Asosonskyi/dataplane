module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                orange: "#FF5722",
                orangeLight: "rgba(255, 87, 34, 0.16)",
                green: "rgba(83, 138, 45, 0.79)",
                greenLight: "rgba(114, 184, 66, 0.24)",
                red: "#F80000",
                redLight: "rgba(248, 0, 0, 0.09)",
                purple: "#7B61FF",
                purpleLight: "rgba(123, 97, 255, 0.12)",
                blue: "#0073C6",
                online: "#2E6707",
                halfBlack: "rgba(0, 0, 0, 0.52)",
                grayish: "#C4C4C4",
                // DARK THEME COLORS
                darkNav: "#091E3A",
                darkBody: "#0E1928",

            },
            borderColor: {
                gray: "#D3D3D3",
                darkGray: "#616161",
                divider: "#C7C3C3",
                darkDivider: "#264369",
            },
            fontSize: {
                title: "1.75rem",
                "17": "1.0625rem",
                "22": "1.375rem"
            },
            flex: {
                "2": "2 0 0"
            },
            gridTemplateColumns: {
                'pipeline': 'repeat(7, 1fr)',
                'teams': 'repeat(6, 1fr)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};