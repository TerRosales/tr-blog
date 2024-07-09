import React from "react";
import { Accordion, List, ListItem, Button } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi"; //need to fix this problem of icons not loading when hooked up.

const TermsConditions = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-3xl font-bold mx-5 my-10 text-neutral-700 dark:text-gray-500">
          Terms and Conditions
        </h1>
      </div>
      <section className="my-10 mx-10">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>1. Introduction</Accordion.Title>
            <Accordion.Content>
              Welcome to Tr-Blog - Terrence Rosales Blog. By accessing or using
              our website, you agree to comply with and be bound by the
              following terms and conditions. If you do not agree with any part
              of these terms, you must not use our website.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>2. Purpose</Accordion.Title>
            <Accordion.Content>
              The primary purpose of this blog is for me to share my thoughts
              with everyone and to provide a platform for everyone to share
              their thoughts with me. We aim to foster a respectful and engaging
              community where ideas and opinions can be exchanged freely.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>3. User Conduct</Accordion.Title>
            <Accordion.Content>
              We are committed to creating a positive and respectful community.
              By using our website, you agree to the following:
              <List className="decoration-teal-600 pl-5 my-5">
                <ListItem>
                  You will not use language that is offensive, defamatory,
                  discriminatory, or obscene.
                </ListItem>
                <ListItem>
                  You will not engage in harassment, bullying, or any behavior
                  intended to bring others down.
                </ListItem>
                <ListItem>
                  You will respect the opinions and contributions of others,
                  even if you disagree with them.
                </ListItem>
              </List>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              4. Account Suspension and Termination
            </Accordion.Title>
            <Accordion.Content>
              We reserve the right to suspend or terminate your account at our
              discretion if you violate these terms. This includes, but is not
              limited to, the use of inappropriate language or behavior that
              negatively impacts the community.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>5. Content Ownership</Accordion.Title>
            <Accordion.Content>
              You retain ownership of any content you post on our website.
              However, by posting content, you grant us a non-exclusive,
              royalty-free, perpetual, and worldwide license to use, display,
              and distribute your content on our website.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>6. Disclaimer of Warranties</Accordion.Title>
            <Accordion.Content>
              Our website is provided on an "as is" and "as available" basis. We
              make no warranties, expressed or implied, regarding the website's
              operation or the information, content, or materials included on
              it.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>7. Limitation of Liability</Accordion.Title>
            <Accordion.Content>
              We will not be liable for any damages arising from the use of our
              website. This includes direct, indirect, incidental, punitive, and
              consequential damages.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              8. Changes to Terms and Conditions
            </Accordion.Title>
            <Accordion.Content>
              We may update these terms and conditions from time to time. We
              will notify you of any changes by posting the new terms on this
              page. You are advised to review this page periodically for any
              changes.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>9. Governing Law</Accordion.Title>
            <Accordion.Content>
              These terms and conditions are governed by and construed in
              accordance with the laws of The United States, and you submit to
              the non-exclusive jurisdiction of the courts located in The United
              States for the resolution of any disputes.
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>10. Contact Us</Accordion.Title>
            <Accordion.Content>
              If you have any questions about these terms and conditions, please
              contact us at rtin27411@gmail.com.
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </section>
      <section>
        <h3 className="text-center my-20 text-3xl font-semibold border-2 border-gray-200 dark:border-teal-400 rounded-xl mx-10 py-4 dark:text-red-400">
          Thank you for following the rules of my page, let us continue to
          share, the correct ideas to better ourselves.
        </h3>
      </section>
    </div>
  );
};

export default TermsConditions;
