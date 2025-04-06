export const highlightCodeText = (text, keyword, flag) => {
    if (!keyword || !text) return text;

    const exactPattern = keyword
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // escape regex special chars
        .replace(/\s+/g, '\\s*'); // make whitespace flexible
    
    const regex = new RegExp(`(${exactPattern})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? (
            <span key={index} style={{ color: 'black', backgroundColor: flag === 'original' ? 'red' : 'lightgreen', fontWeight: 'bold' }}>
                {part}
            </span>
        ) : (
            part
        )
    );
};