# Configuration Google OAuth pour Supabase

Guide complet pour configurer l'authentification Google OAuth dans votre application Remove Watermark Pro.

## 📋 Étape 1 : Créer un Projet Google Cloud

1. **Allez sur Google Cloud Console** :
   - https://console.cloud.google.com/

2. **Créez un nouveau projet** (ou sélectionnez un projet existant) :
   - Cliquez sur le sélecteur de projet en haut
   - Cliquez sur "NEW PROJECT"
   - Nom du projet : `Remove Watermark Pro` (ou autre nom de votre choix)
   - Cliquez sur "CREATE"

3. **Sélectionnez votre nouveau projet** dans le sélecteur

---

## 📋 Étape 2 : Configurer l'Écran de Consentement OAuth

1. **Allez dans "APIs & Services" → "OAuth consent screen"** :
   - https://console.cloud.google.com/apis/credentials/consent

2. **Configurez l'écran de consentement** :
   - **User Type** : Sélectionnez "External"
   - Cliquez sur "CREATE"

3. **Remplissez les informations de l'application** :
   
   **App information :**
   - **App name** : `Remove Watermark Pro`
   - **User support email** : Votre email
   - **App logo** (optionnel) : Vous pouvez uploader le logo plus tard
   
   **App domain :**
   - **Application home page** : `https://removewatermarkspro-a11y.vercel.app` (votre domaine Vercel)
   - **Privacy policy link** : `https://removewatermarkspro-a11y.vercel.app/privacy`
   - **Terms of service link** : `https://removewatermarkspro-a11y.vercel.app/terms`
   
   **Authorized domains :**
   - Ajoutez : `vercel.app`
   - Ajoutez : `supabase.co`
   
   **Developer contact information :**
   - Votre email

4. **Cliquez sur "SAVE AND CONTINUE"**

5. **Scopes** :
   - Cliquez sur "ADD OR REMOVE SCOPES"
   - Sélectionnez :
     - `.../auth/userinfo.email`
     - `.../auth/userinfo.profile`
   - Cliquez sur "UPDATE"
   - Cliquez sur "SAVE AND CONTINUE"

6. **Test users** (optionnel pour le développement) :
   - Ajoutez vos emails de test si besoin
   - Cliquez sur "SAVE AND CONTINUE"

7. **Résumé** :
   - Vérifiez les informations
   - Cliquez sur "BACK TO DASHBOARD"

---

## 📋 Étape 3 : Créer les Credentials OAuth 2.0

1. **Allez dans "Credentials"** :
   - https://console.cloud.google.com/apis/credentials

2. **Créez les credentials** :
   - Cliquez sur "+ CREATE CREDENTIALS"
   - Sélectionnez "OAuth client ID"

3. **Configurez le client OAuth** :
   
   **Application type** :
   - Sélectionnez "Web application"
   
   **Name** :
   - `Remove Watermark Pro - Supabase Auth`
   
   **Authorized JavaScript origins** :
   - Ajoutez : `https://fnanqsllnsbywfnfqqop.supabase.co`
   - Ajoutez : `http://localhost:3000` (pour le développement local)
   
   **Authorized redirect URIs** :
   - **IMPORTANT** : Ajoutez cette URL exacte :
     ```
     https://fnanqsllnsbywfnfqqop.supabase.co/auth/v1/callback
     ```
   - Pour le développement local (optionnel) :
     ```
     http://localhost:54321/auth/v1/callback
     ```

4. **Cliquez sur "CREATE"**

5. **Copiez vos credentials** :
   - Une popup apparaît avec :
     - **Client ID** : `xxxxx.apps.googleusercontent.com`
     - **Client Secret** : `GOCSPX-xxxxx`
   - **IMPORTANT** : Notez ces valeurs quelque part (bloc-notes temporaire)

---

## 📋 Étape 4 : Configurer Supabase

1. **Allez dans votre dashboard Supabase** :
   - https://supabase.com/dashboard/project/fnanqsllnsbywfnfqqop/auth/providers

2. **Trouvez "Google"** dans la liste des providers

3. **Activez Google OAuth** :
   - **Enable Sign in with Google** : Toggle à ON (vert)

4. **Remplissez les credentials** :
   - **Google Client ID** : Collez le Client ID copié à l'étape 3
   - **Google Client Secret** : Collez le Client Secret copié à l'étape 3

5. **Configuration avancée (optionnel)** :
   - **Skip nonce check** : Laissez décoché
   - **Allowed Client IDs** : Laissez vide (sauf si vous avez plusieurs apps)

6. **Cliquez sur "Save"**

---

## ✅ Vérification

### Dans Google Cloud Console :
- ✓ Projet créé
- ✓ OAuth consent screen configuré
- ✓ OAuth Client ID créé
- ✓ Redirect URI Supabase ajouté

### Dans Supabase :
- ✓ Google provider activé (toggle vert)
- ✓ Client ID renseigné
- ✓ Client Secret renseigné

---

## 🧪 Tester l'Authentification

### Option 1 : Test Rapide dans Supabase

1. Allez dans **Authentication** → **Users**
2. Cliquez sur "Invite user" ou testez avec votre app

### Option 2 : Test dans Votre Application

Vous pourrez tester une fois que nous aurons intégré Supabase Auth dans vos composants. Pour l'instant, la configuration est prête !

---

## 🔐 URLs Importantes à Retenir

### Google Cloud Console
- **Credentials** : https://console.cloud.google.com/apis/credentials
- **OAuth Consent Screen** : https://console.cloud.google.com/apis/credentials/consent

### Supabase
- **Auth Providers** : https://supabase.com/dashboard/project/fnanqsllnsbywfnfqqop/auth/providers
- **Auth Users** : https://supabase.com/dashboard/project/fnanqsllnsbywfnfqqop/auth/users

### Redirect URI de Supabase (pour référence)
```
https://fnanqsllnsbywfnfqqop.supabase.co/auth/v1/callback
```

---

## 📱 Pour l'Email/Magic Link

L'authentification par email (Magic Link) devrait déjà être activée par défaut dans Supabase. Vérifiez dans **Authentication** → **Providers** que "Email" est bien activé (toggle vert).

Aucune configuration supplémentaire n'est nécessaire pour l'email !

---

## 🆘 Problèmes Courants

### Erreur : "redirect_uri_mismatch"
- Vérifiez que l'URL de callback dans Google Cloud est exactement :
  `https://fnanqsllnsbywfnfqqop.supabase.co/auth/v1/callback`
- Vérifiez qu'il n'y a pas d'espace ou de caractère en trop

### Erreur : "invalid_client"
- Vérifiez que le Client ID et Client Secret sont correctement copiés dans Supabase
- Pas d'espaces avant/après les valeurs

### L'écran de consentement demande les scopes "openid"
- C'est normal, Supabase demande automatiquement `openid`, `email`, et `profile`

---

## 🎯 Prochaine Étape

Une fois Google OAuth configuré, vous devrez :
1. Modifier vos composants pour utiliser Supabase Auth au lieu de localStorage
2. Intégrer le bouton "Continue with Google" avec `supabase.auth.signInWithOAuth()`

Je peux vous aider à faire cette intégration quand vous serez prêt !
