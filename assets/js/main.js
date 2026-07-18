/* =========================================================
   Grassroots Future Alliance — Main JavaScript
   All page behaviour lives here, organized into small,
   commented functions. Loaded with `defer` on every page.
   ========================================================= */

/**
 * Toggles the mobile navigation menu open/closed.
 * Bound to the hamburger button's onclick in the header markup.
 */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  const isActive = menu.classList.toggle('active');
  const button = document.querySelector('[data-menu-toggle]');
  if (button) button.setAttribute('aria-expanded', String(isActive));
}

/**
 * Closes the mobile menu automatically whenever a link inside
 * it is clicked, so navigating to a new section/page doesn't
 * leave the menu open underneath.
 */
function initMobileMenuAutoClose() {
  document.querySelectorAll('#mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.remove('active');
    });
  });
}

/**
 * Reveal-on-scroll animation using IntersectionObserver.
 * Adds `.reveal-visible` to any `.reveal` element once it enters
 * the viewport, producing a subtle fade/slide-in effect.
 */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Donate page: tracks the currently selected donation amount,
 * highlights the chosen preset card, and updates the on-screen
 * confirmation text. Also wires up the custom-amount button.
 */
let selectedAmount = 0;

function selectAmount(amount, sourceEl) {
  selectedAmount = Number(amount) || 0;

  document.querySelectorAll('.donation-card').forEach((card) => {
    card.classList.remove('selected');
  });

  const card = sourceEl?.closest('.donation-card');
  if (card) card.classList.add('selected');

  const display = document.getElementById('selectedAmount');
  if (display) {
    display.textContent = selectedAmount > 0
      ? `You selected: $${selectedAmount}`
      : 'No amount selected';
  }
}

/**
 * Donate page: simulates completing a donation. In production
 * this is where a real payment provider (Stripe, PayPal, Mobile
 * Money, etc.) would be invoked instead of an alert().
 */
function processDonation() {
  if (!selectedAmount || selectedAmount <= 0) {
    alert('Please select a donation amount first.');
    return;
  }
  alert(`Thank you for your generous donation of $${selectedAmount}! In a real application, this would process the payment securely.`);
}

/**
 * Wires click handlers for the preset donation amount buttons
 * and the "Set Amount" custom amount button, if present on the page.
 */
function initDonationForm() {
  document.querySelectorAll('.donation-card').forEach((card) => {
    card.addEventListener('click', function (event) {
      selectAmount(this.dataset.amount, event.currentTarget);
    });
  });

  const customBtn = document.getElementById('setCustomAmount');
  const customInput = document.getElementById('customAmount');
  if (customBtn && customInput) {
    customBtn.addEventListener('click', () => selectAmount(customInput.value, null));
  }

  const donateBtn = document.getElementById('completeDonationBtn');
  if (donateBtn) {
    donateBtn.addEventListener('click', processDonation);
  }
}

/**
 * Runs once the DOM is ready. Keeping a single entry point makes
 * it easy to see everything that initializes on page load.
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenuAutoClose();
  initScrollReveal();
  initDonationForm();
});
