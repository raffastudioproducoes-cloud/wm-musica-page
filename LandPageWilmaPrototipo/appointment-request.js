(() => {
  const trigger = document.getElementById('appointment-trigger');
  const dialog = document.getElementById('appointment-dialog');
  const panel = dialog?.querySelector('section');
  const form = document.getElementById('appointment-form');
  const closeControls = dialog?.querySelectorAll('[data-appointment-close], #appointment-close');
  const errorSummary = document.getElementById('appointment-error-summary');
  let lastFocusedElement;

  if (!trigger || !dialog || !panel || !form || !errorSummary) return;

  const fields = {
    name: document.getElementById('appointment-name'),
    contact: document.getElementById('appointment-contact'),
    email: document.getElementById('appointment-email'),
    phone: document.getElementById('appointment-phone'),
    message: document.getElementById('appointment-message'),
  };

  const getFocusableElements = () => Array.from(
    dialog.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'),
  ).filter((element) => !element.hidden);

  const closeDialog = () => {
    dialog.classList.add('hidden');
    dialog.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    lastFocusedElement?.focus();
  };

  const openDialog = () => {
    lastFocusedElement = document.activeElement;
    dialog.classList.remove('hidden');
    dialog.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    fields.name?.focus();
  };

  const setFieldError = (field, message) => {
    const error = document.getElementById(`${field.id}-error`);
    field.setAttribute('aria-invalid', String(Boolean(message)));
    field.classList.toggle('border-error', Boolean(message));
    field.classList.toggle('focus:border-error', Boolean(message));
    if (!error) return;
    error.textContent = message;
    error.classList.toggle('hidden', !message);
  };

  const validate = () => {
    const errors = [];
    const required = [
      [fields.name, 'Informe seu nome.'],
      [fields.contact, 'Informe o contato ou a organização.'],
      [fields.email, 'Informe seu e-mail.'],
      [fields.phone, 'Informe seu celular.'],
      [fields.message, 'Descreva brevemente sua solicitação.'],
    ];

    required.forEach(([field, message]) => {
      const error = !field.value.trim() ? message : '';
      setFieldError(field, error);
      if (error) errors.push({ field, message: error });
    });

    if (!fields.email.value.trim() || fields.email.validity.valid) {
      // The required validation above already covers an empty field.
    } else {
      const message = 'Informe um e-mail válido.';
      setFieldError(fields.email, message);
      errors.push({ field: fields.email, message });
    }

    const digits = fields.phone.value.replace(/\D/g, '');
    if (fields.phone.value.trim() && digits.length < 10) {
      const message = 'Informe um celular com DDD.';
      setFieldError(fields.phone, message);
      errors.push({ field: fields.phone, message });
    }

    errorSummary.classList.toggle('hidden', errors.length === 0);
    return errors;
  };

  trigger.addEventListener('click', openDialog);
  closeControls.forEach((control) => control.addEventListener('click', closeDialog));

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
      return;
    }

    if (event.key !== 'Tab') return;
    const focusableElements = getFocusableElements();
    if (!focusableElements.length) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const errors = validate();
    if (errors.length) {
      errorSummary.focus();
      return;
    }

    const request = [
      'Solicitação de Agendamento — Wilma Machado',
      '',
      `Nome: ${fields.name.value.trim()}`,
      `Contato / organização: ${fields.contact.value.trim()}`,
      `E-mail: ${fields.email.value.trim()}`,
      `Celular: ${fields.phone.value.trim()}`,
      '',
      'Descrição ou pedido:',
      fields.message.value.trim(),
    ].join('\n');
    const subject = 'Solicitação de Agendamento — Wilma Machado';
    const emailUrl = `mailto:wmciaproducaomusical@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const whatsappUrl = `https://wa.me/5521970152448?text=${encodeURIComponent(request)}`;
    const whatsappLink = document.createElement('a');

    whatsappLink.href = whatsappUrl;
    whatsappLink.target = '_blank';
    whatsappLink.rel = 'noopener noreferrer';
    whatsappLink.click();
    window.location.href = emailUrl;
  });
})();
