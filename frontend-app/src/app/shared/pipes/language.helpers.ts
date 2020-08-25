export function translate(languageJSON, label: string): string | null {
  let labelLowerCase = label.toLowerCase();

  if (languageJSON[labelLowerCase]) {
    return languageJSON[labelLowerCase];
  } else return label;
}
