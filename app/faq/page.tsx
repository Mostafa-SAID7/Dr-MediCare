import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: 'FAQ | MediCare',
  description: 'Frequently asked questions about MediCare services',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-grid-dots">
      <Header currentPath="/faq" />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader 
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our services"
            centered
          />
          
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  How do I book an appointment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  You can book an appointment in several ways:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Online through our website - available 24/7</li>
                    <li>Call our support line at (555) 123-4567</li>
                    <li>Visit our clinic directly during office hours</li>
                    <li>Use our mobile app for quick booking</li>
                  </ul>
                  Online booking is the fastest method and allows you to see real-time availability.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What insurance do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We accept most major insurance plans including:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Blue Cross Blue Shield</li>
                    <li>Aetna</li>
                    <li>UnitedHealthcare</li>
                    <li>Cigna</li>
                    <li>Medicare and Medicaid</li>
                  </ul>
                  Please contact us with your specific insurance information to verify coverage before your appointment. We also offer self-pay options.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  Can I reschedule my appointment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes, you can reschedule your appointment up to 24 hours before your scheduled time. You can:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Reschedule online through your patient portal</li>
                    <li>Call our support team</li>
                    <li>Use the mobile app</li>
                  </ul>
                  Please note that late cancellations (less than 24 hours) or no-shows may result in a cancellation fee.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  Do you offer telemedicine?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes, we offer virtual consultations for many types of appointments. Telemedicine is available for:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Follow-up appointments</li>
                    <li>Prescription refills</li>
                    <li>Minor illness consultations</li>
                    <li>Mental health services</li>
                    <li>Chronic disease management</li>
                  </ul>
                  You can select the telemedicine option when booking your appointment online.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What should I bring to my first appointment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  For your first visit, please bring:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Photo ID (driver's license or passport)</li>
                    <li>Insurance card</li>
                    <li>List of current medications</li>
                    <li>Medical history records (if available)</li>
                    <li>List of allergies</li>
                    <li>Payment method for any copays</li>
                  </ul>
                  Arriving 15 minutes early helps ensure a smooth check-in process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  How do I access my medical records?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  You can access your medical records through:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Our patient portal - available 24/7</li>
                    <li>Mobile app</li>
                    <li>Request copies at the front desk</li>
                  </ul>
                  Your records include test results, visit summaries, prescriptions, and immunization history. All records are HIPAA-compliant and securely stored.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are your office hours?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our office hours are:
                  <ul className="list-none mt-2 space-y-1">
                    <li><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</li>
                    <li><strong>Saturday:</strong> 9:00 AM - 5:00 PM</li>
                    <li><strong>Sunday:</strong> 10:00 AM - 4:00 PM</li>
                    <li><strong>Emergency Services:</strong> 24/7</li>
                  </ul>
                  Online booking and the patient portal are available 24/7.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  Do you offer same-day appointments?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes, we offer same-day appointments based on availability. For urgent medical needs:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Check online for same-day availability</li>
                    <li>Call our office for immediate scheduling</li>
                    <li>Visit our walk-in clinic (no appointment needed)</li>
                  </ul>
                  For life-threatening emergencies, please call 911 or visit the nearest emergency room.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  How much does a consultation cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Consultation fees vary by provider and type of visit:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>General consultation: $100-$150</li>
                    <li>Specialist consultation: $150-$200</li>
                    <li>Telemedicine visit: $75-$125</li>
                  </ul>
                  Insurance coverage may reduce or eliminate these costs. Contact us for specific pricing and insurance verification.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  Can family members book appointments for me?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes, family members can book appointments on your behalf if:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>They have your written authorization</li>
                    <li>They are listed as an authorized contact in your patient profile</li>
                    <li>For minors, parents/guardians can book directly</li>
                  </ul>
                  You can add authorized contacts through your patient portal or by contacting our office.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center p-8 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Support
              </a>
              <a href="tel:5551234567" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
