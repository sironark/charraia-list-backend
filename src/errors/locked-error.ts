export function lockedError(resource?: string) {
  return {
    name: 'lockedError',
    message: `${resource || 'Não é possível acessar esse item!'}`,
  };
}
