  
        // 1. COMPANY CONFIG
        const COMPANY_CONFIG = {
            whatsappNumber: "919785589164", // Indian format without + symbol
            companyName: "Finora Finance",
            email: "info@finorafinance.com",
            phone: "+91 97855 89164"
        };

        const loanData = {
            home: {
                title: "Home Loan",
                subtitle: "Make Your Dream Home a Reality",
                amount: "₹2 Lakh – ₹5 Crore",
                rate: "Starting from 8.50% p.a.",
                tenure: "Up to 30 Years",
                desc: "Get customizable home financing options for purchasing new flats, resale properties, or home construction.",
                eligibility: ["Indian resident aged 21-65", "Stable monthly salary or business income", "Good credit score profile"],
                documents: ["Aadhaar & PAN Card", "3 Months Salary Slips / ITR", "6 Months Bank Statement", "Property Title Documents"],
                benefits: ["Flexible tenure up to 30 years", "Tax benefits under Sec 80C & 24", "Easy balance transfer facility"]
            },
            car: {
                title: "Car Loan",
                subtitle: "Drive Home Your Dream Vehicle",
                amount: "₹1 Lakh – ₹1 Crore",
                rate: "Starting from 8.90% p.a.",
                tenure: "Up to 7 Years",
                desc: "Hassle-free auto financing covering up to 90% on-road funding for new and certified pre-owned cars.",
                eligibility: ["Salaried or Self-Employed", "Minimum 1 year employment / business continuity", "Valid driving license"],
                documents: ["KYC Documents", "3 Months Income Proof", "Bank Statement", "Car Proforma Invoice"],
                benefits: ["Up to 90% on-road financing", "Quick 24-hour approval", "Flexible prepayment options"]
            },
            personal: {
                title: "Personal Loan",
                subtitle: "Instant Funds for All Personal Needs",
                amount: "₹50,000 – ₹25 Lakh",
                rate: "Starting from 10.50% p.a.",
                tenure: "Up to 5 Years",
                desc: "Unsecured personal credit for medical bills, weddings, home renovation, or travel with minimal paperwork.",
                eligibility: ["Minimum age 21 years", "Minimum salary ₹20,000/month", "Work experience of 1+ year"],
                documents: ["PAN & Aadhaar Card", "3 Months Pay Slips", "6 Months Bank Statement"],
                benefits: ["Zero collateral required", "Minimal documentation", "Disposal in quick turnaround time"]
            },
            business: {
                title: "Business Loan",
                subtitle: "Empower Business Growth & Expansion",
                amount: "₹2 Lakh – ₹1 Crore",
                rate: "Starting from 11.25% p.a.",
                tenure: "Up to 10 Years",
                desc: "Fuel working capital, machinery purchase, inventory stock, or office expansion with customized loan terms.",
                eligibility: ["Business vintage minimum 2 years", "GST registered enterprise", "Positive cash flow balance"],
                documents: ["GST Registration Certificate", "2 Years Audited Financials / ITR", "Bank Statement (12 Months)"],
                benefits: ["Collateral-free options available", "Flexible repayment schedules", "High loan amount limit"]
            },
            education: {
                title: "Education Loan",
                subtitle: "Invest in World-Class Education",
                amount: "₹1 Lakh – ₹75 Lakh",
                rate: "Starting from 9.25% p.a.",
                tenure: "Up to 15 Years",
                desc: "Comprehensive student funding covering tuition fees, hostel, travel, and books for studies in India or abroad.",
                eligibility: ["Confirmed admission in recognized course", "Co-borrower (parent/guardian) with income"],
                documents: ["Admission Offer Letter", "Academic Marksheets", "Co-borrower Income Proof & KYC"],
                benefits: ["Moratorium period (Study + 1 year)", "Tax deduction under Section 80E", "Covers 100% course expenses"]
            },
            property: {
                title: "Loan Against Property",
                subtitle: "Unlock Value from Property Assets",
                amount: "₹5 Lakh – ₹10 Crore",
                rate: "Starting from 9.00% p.a.",
                tenure: "Up to 20 Years",
                desc: "Leverage residential or commercial property to secure high-ticket funding at lower interest rates.",
                eligibility: ["Clear property ownership title", "Stable income source for repayment"],
                documents: ["Property Chain Documents", "Income Tax Returns", "Bank Statements & KYC"],
                benefits: ["Lower interest rates than personal loans", "Longer tenure for small EMIs", "High loan-to-value ratio"]
            },
            gold: {
                title: "Gold Loan",
                subtitle: "Instant Cash Against Gold Ornaments",
                amount: "₹25,000 – ₹50 Lakh",
                rate: "Starting from 8.75% p.a.",
                tenure: "Up to 3 Years",
                desc: "Instant cash disbursal against gold ornaments with safe vault storage and flexible bullet repayment options.",
                eligibility: ["Any individual owning gold ornaments above 18 Karat purity", "Age 18+"],
                documents: ["Aadhaar Card", "PAN Card", "Passport photo"],
                benefits: ["Instant 30-minute approval", "Bullet repayment option", "Highest safety vault insurance"]
            }
        };
        document.addEventListener('DOMContentLoaded', () => {
            // Remove Loader
            setTimeout(() => {
                document.getElementById('page-loader').classList.add('loaded');
            }, 600);

            // Initialize AOS Animation
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 60,
                    easing: 'ease-out-cubic'
                });
            }

            // Trigger Initial EMI Calculation
            calculateEMI();

            // Intersection Observer for Animated Counter Stats
            setupCounterObserver();

            // Navbar Scroll Event
            window.addEventListener('scroll', handleScrollEvents);
        });

        // 4. SCROLL & NAVBAR EVENTS
        function handleScrollEvents() {
            const navbar = document.getElementById('mainNavbar');
            const backToTop = document.getElementById('backToTop');
            const scrollProgress = document.getElementById('scroll-progress');

            // Navbar shadow & glass effect
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Back to top visibility
            if (window.scrollY > 400) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }

            // Scroll Progress Percentage
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Mobile Nav Toggle
        function toggleMobileNav() {
            document.getElementById('navLinks').classList.toggle('open');
        }

        function closeMobileNav() {
            document.getElementById('navLinks').classList.remove('open');
        }

        // 5. ANIMATED COUNTERS
        function setupCounterObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounters();
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.3 });

            const statsElem = document.getElementById('counterStats');
            if (statsElem) observer.observe(statsElem);
        }

        function startCounters() {
            const numbers = document.querySelectorAll('.stat-number');
            numbers.forEach(num => {
                const target = +num.getAttribute('data-target');
                let count = 0;
                const increment = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                    }
                    if (target === 100) {
                        num.innerText = `₹${count}Cr+`;
                    } else if (target === 98) {
                        num.innerText = `${count}%`;
                    } else {
                        num.innerText = `${count.toLocaleString('en-IN')}+`;
                    }
                }, 40);
            });
        }

        // 6. EMI CALCULATOR LOGIC
        function calculateEMI() {
            const P = parseFloat(document.getElementById('calcAmount').value);
            const R = parseFloat(document.getElementById('calcRate').value) / 12 / 100;
            const N = parseFloat(document.getElementById('calcTenure').value) * 12;

            // Format Labels
            document.getElementById('calcAmountLabel').innerText = `₹ ${P.toLocaleString('en-IN')}`;
            document.getElementById('calcRateLabel').innerText = `${document.getElementById('calcRate').value} %`;
            document.getElementById('calcTenureLabel').innerText = `${document.getElementById('calcTenure').value} Years`;

            // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
            const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
            const totalPayment = emi * N;
            const totalInterest = totalPayment - P;

            document.getElementById('resEMI').innerText = `₹ ${Math.round(emi).toLocaleString('en-IN')}`;
            document.getElementById('resPrincipal').innerText = `₹ ${P.toLocaleString('en-IN')}`;
            document.getElementById('resInterest').innerText = `₹ ${Math.round(totalInterest).toLocaleString('en-IN')}`;
            document.getElementById('resTotal').innerText = `₹ ${Math.round(totalPayment).toLocaleString('en-IN')}`;
        }

        function applyFromCalculator() {
            const amount = document.getElementById('calcAmount').value;
            openEnquiryModal('General Loan', amount);
        }

        // 7. MODAL ENQUIRY LOGIC
        function openEnquiryModal(loanType = 'Home Loan', prefillAmount = '') {
            document.getElementById('enquiryModal').classList.add('open');
            document.getElementById('modalLoanTitle').innerText = `Apply for ${loanType}`;
            
            const select = document.getElementById('modalLoanTypeSelect');
            if (select) {
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].value === loanType) {
                        select.selectedIndex = i;
                        break;
                    }
                }
            }

            if (prefillAmount) {
                document.getElementById('modalLoanAmount').value = prefillAmount;
            }
        }

        function closeEnquiryModal() {
            document.getElementById('enquiryModal').classList.remove('open');
        }

        // 8. LOAN DETAILS DYNAMIC MODAL
        function showLoanDetails(key) {
            const data = loanData[key];
            if (!data) return;

            const content = `
                <span class="badge-trust" style="margin-bottom:10px;">${data.subtitle}</span>
                <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--primary);">${data.title}</h2>
                <p style="color: var(--muted-text); font-size: 0.95rem; margin-bottom: 20px;">${data.desc}</p>
                
                <div style="background: var(--light); padding: 16px; border-radius: 12px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 24px; text-align: center;">
                    <div><span style="font-size: 0.75rem; color: var(--muted-text);">Loan Amount</span><br><strong style="color: var(--primary);">${data.amount}</strong></div>
                    <div><span style="font-size: 0.75rem; color: var(--muted-text);">Interest Rate</span><br><strong style="color: var(--secondary);">${data.rate}</strong></div>
                    <div><span style="font-size: 0.75rem; color: var(--muted-text);">Max Tenure</span><br><strong style="color: var(--primary);">${data.tenure}</strong></div>
                </div>

                <h4 style="font-size: 1.05rem; margin-bottom: 10px;">Eligibility Criteria</h4>
                <ul style="margin-bottom: 20px; padding-left: 20px; color: var(--muted-text); font-size: 0.9rem;">
                    ${data.eligibility.map(item => `<li style="margin-bottom: 4px;">✓ ${item}</li>`).join('')}
                </ul>

                <h4 style="font-size: 1.05rem; margin-bottom: 10px;">Required Documents</h4>
                <ul style="margin-bottom: 24px; padding-left: 20px; color: var(--muted-text); font-size: 0.9rem;">
                    ${data.documents.map(item => `<li style="margin-bottom: 4px;">✓ ${item}</li>`).join('')}
                </ul>

                <button class="btn btn-accent" style="width: 100%;" onclick="closeLoanDetailsModal(); openEnquiryModal('${data.title}')">
                    Apply for ${data.title} Now <i class="fa-solid fa-arrow-right"></i>
                </button>
            `;

            document.getElementById('loanDetailsContent').innerHTML = content;
            document.getElementById('loanDetailsModal').classList.add('open');
        }

        function closeLoanDetailsModal() {
            document.getElementById('loanDetailsModal').classList.remove('open');
        }

        // 9. FAQ ACCORDION TOGGLE
        function toggleFaq(element) {
            const item = element.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

            // Toggle clicked
            if (!isActive) {
                item.classList.add('active');
            }
        }

        // 10. FORM SUBMISSION & WHATSAPP REDIRECT
        function handleFormSubmit(event, source = 'Form') {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            const name = formData.get('fullName') || 'Customer';
            const mobile = formData.get('mobile') || '';
            const email = formData.get('email') || '';
            const loanType = formData.get('loanType') || 'General Loan';
            const amount = formData.get('amount') || 'Not specified';
            const city = formData.get('city') || 'Not specified';
            const employment = formData.get('employment') || 'Not specified';
            const income = formData.get('income') || 'Not specified';
            const message = formData.get('message') || '';

            // Construct WhatsApp Message Text
            let text = `*NEW LOAN ENQUIRY - ${COMPANY_CONFIG.companyName.toUpperCase()}*\n\n`;
            text += `👤 *Name:* ${name}\n`;
            text += `📱 *Mobile:* ${mobile}\n`;
            text += `✉️ *Email:* ${email}\n`;
            text += `🏦 *Loan Type:* ${loanType}\n`;
            text += `💰 *Required Amount:* ₹${amount}\n`;
            text += `🏙️ *City:* ${city}\n`;
            text += `💼 *Employment:* ${employment}\n`;
            text += `💵 *Monthly Income:* ₹${income}\n`;
            if (message) text += `💬 *Message:* ${message}\n`;
            text += `\nPlease assist me with loan details and eligibility.`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodedText}`;

            showToast(`Thank you ${name}! Your enquiry is ready. Opening WhatsApp...`);

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                closeEnquiryModal();
                form.reset();
            }, 1000);
        }

        function openWhatsAppDirect(type = 'General') {
            const text = encodeURIComponent(`Hello ${COMPANY_CONFIG.companyName}, I would like to inquire about your loan options and assistance.`);
            window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${text}`, '_blank');
        }

        // 11. CUSTOM TOAST NOTIFICATION
        function showToast(msg) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'custom-toast';
            toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color:var(--accent);"></i> <span>${msg}</span>`;
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }
    