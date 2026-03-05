import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

import "../styles/pages/homePage.css"


function HomePage() {
  return (
    <section className="home-container">
         <div className="w-full max-w-lg">
      <form>
        <Card>
          <CardHeader>
            <CardTitle>Commencer le jeu</CardTitle>
            <CardDescription>Renseignez vos informations pour démarrer.</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldSet>
              <FieldGroup>
                {/* Ligne : Pseudo + Age */}
                <div className="flex gap-4">
                  <Field className="flex-1">
                    <FieldContent>
                      <FieldLabel htmlFor="pseudo">Pseudo</FieldLabel>
                    </FieldContent>
                    <Input id="pseudo" placeholder="Votre pseudo" required />
                  </Field>
                  <Field className="flex-1">
                    <FieldContent>
                      <FieldLabel htmlFor="age">Âge</FieldLabel>
                    </FieldContent>
                    <Input id="age" type="number" placeholder="Votre âge" required />
                  </Field>
                </div>

                {/* Ligne : Catégorie */}
                <Field>
                  <FieldContent>
                    <FieldLabel htmlFor="categorie">Catégorie</FieldLabel>
                    <FieldDescription>Choisissez une catégorie de jeu</FieldDescription>
                  </FieldContent>
                   <Input id="category" placeholder="Catégorie de jeu" required />
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <CardFooter className="flex justify-end">
           <Link to="/quiz" className="w-full ">
            <Button type="submit" >Lancer le jeu</Button>
           </Link>
          </CardFooter>
        </Card>
      </form>
    </div>
    </section>
  );
}

export default HomePage;
