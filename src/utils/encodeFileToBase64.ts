const encodeFileToBase64 = (image: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (event) => {
            const base64String: string | ArrayBuffer | null | undefined = event.target?.result;
            if (typeof base64String === 'string') {
                const encodedValue = base64String.split(',')[1]; // 인코딩 값을 추출
                resolve(encodedValue);
            } else {
                reject(new Error('Failed to encode the file to base64.'));
            }
        };
        reader.onerror = (error) => reject(error);
    });
};

// reader.onload = (event: any) => resolve(event.target.result);

export default encodeFileToBase64;
