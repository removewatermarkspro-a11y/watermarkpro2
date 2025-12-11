# Configuration Supabase pour Remove Watermark Pro

## 📋 Informations du projet

**Project URL:** https://reaknipmijhiquyupyid.supabase.co  
**Anon Public Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYWtuaXBtaWpoaXF1eXVweWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjUyNzEsImV4cCI6MjA4MTA0MTI3MX0.aUk23ENaR_a44th3kEOHgoBOKCndcF-YJboQlf921ow`

## 🚀 Étapes pour créer les tables sur Supabase

### Étape 1: Connectez-vous à Supabase
1. Allez sur: https://supabase.com/dashboard/sign-in
2. Connectez-vous avec votre compte

### Étape 2: Accédez à l'éditeur SQL
1. Une fois connecté, allez sur: https://supabase.com/dashboard/project/reaknipmijhiquyupyid/editor
2. Cliquez sur **"New query"** ou **"Nouvelle requête"**

### Étape 3: Exécutez le script SQL
1. Ouvrez le fichier **`supabase-schema.sql`** dans votre éditeur
2. **Copiez tout le contenu** du fichier (Ctrl+A puis Ctrl+C)
3. **Collez** le contenu dans l'éditeur SQL de Supabase
4. Cliquez sur **"Run"** ou **"Exécuter"** (bouton en bas à droite)
5. Attendez la confirmation de succès ✅

### Étape 4: Vérifiez les tables créées
Allez dans **"Table Editor"** pour voir vos nouvelles tables:
- ✅ `users` - Profils utilisateurs
- ✅ `subscriptions` - Abonnements (free/pro/lifetime)
- ✅ `credits` - Système de crédits
- ✅ `usage_history` - Historique d'utilisation

## 📊 Tables créées

### 1. **users**
Stocke les informations de profil utilisateur
- `id` (UUID) - Lié à auth.users
- `email` - Email de l'utilisateur
- `name` - Nom de l'utilisateur
- `registration_date` - Date d'inscription

### 2. **subscriptions**
Gère les abonnements
- `user_id` - Référence utilisateur
- `plan_type` - 'free', 'pro', ou 'lifetime'
- `status` - 'active', 'cancelled', 'expired', 'paused'
- `price` - Prix de l'abonnement
- `billing_cycle_start/end` - Cycle de facturation

### 3. **credits**
Système de crédits pour les opérations
- `user_id` - Référence utilisateur
- `total_credits` - Total de crédits
- `used_credits` - Crédits utilisés
- `remaining_credits` - Calculé automatiquement
- `reset_date` - Date de réinitialisation

### 4. **usage_history**
Historique de toutes les opérations
- `user_id` - Référence utilisateur
- `operation_type` - Type d'opération (watermark_removal, remove_background, etc.)
- `credits_used` - Nombre de crédits utilisés
- `status` - Statut de l'opération

## 🔐 Row Level Security (RLS)

Toutes les tables ont RLS activé pour sécuriser les données:
- Les utilisateurs peuvent uniquement voir/modifier leurs propres données
- Les politiques sont automatiquement appliquées

## 🎯 Fonctionnalités automatiques

### Auto-initialisation des nouveaux utilisateurs
Quand un utilisateur s'inscrit via Supabase Auth:
1. ✅ Création automatique du profil
2. ✅ Attribution d'un plan gratuit
3. ✅ Ajout de 10 crédits gratuits

### Fonctions disponibles
- `initialize_new_user()` - Initialise un nouvel utilisateur
- `deduct_credits(user_id, credits)` - Déduit des crédits

## 📝 Variables d'environnement

Créez un fichier **`.env.local`** à la racine du projet:

```env
NEXT_PUBLIC_SUPABASE_URL=https://reaknipmijhiquyupyid.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYWtuaXBtaWpoaXF1eXVweWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjUyNzEsImV4cCI6MjA4MTA0MTI3MX0.aUk23ENaR_a44th3kEOHgoBOKCndcF-YJboQlf921ow
```

**Important:** Redémarrez votre serveur de développement après avoir créé ce fichier !

```bash
# Arrêtez le serveur (Ctrl+C dans le terminal)
# Puis relancez:
npm run dev
```

## 🔄 Prochaines étapes

Après avoir créé les tables:
1. ✅ Intégrer Supabase dans votre application Next.js
2. ✅ Créer les fonctions d'authentification
3. ✅ Implémenter le système de crédits
4. ✅ Connecter les pages à la base de données
