# Instruções para Configurar o Firebase Firestore

## 1. Acesse o Console do Firebase

- Vá para: https://console.firebase.google.com/
- Faça login com sua conta Google
- Selecione o projeto: "ecommerce-app-30fca"

## 2. Configure as Regras do Firestore

- No menu lateral, clique em "Firestore Database"
- Vá para a aba "Regras" (Rules)
- Substitua as regras existentes por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura e escrita para a coleção products (apenas para desenvolvimento)
    match /products/{document=**} {
      allow read, write: if true;
    }

    // Permitir leitura e escrita para outras coleções (apenas para desenvolvimento)
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## 3. Publique as Regras

- Clique em "Publicar" (Publish)
- Aguarde alguns segundos para as regras serem aplicadas

## ⚠️ IMPORTANTE

Essas regras são apenas para desenvolvimento.
Em produção, você deve implementar autenticação e regras mais restritivas.

## 4. Teste a Aplicação

Após configurar as regras, volte para http://localhost:3000 e teste novamente.

## 5. Adicionar Produtos de Exemplo (Opcional)

Se após configurar as regras ainda não houver produtos, você pode adicionar alguns manualmente:

### Via Console do Firebase:

1. No Firestore Database, clique em "Iniciar coleção"
2. Nome da coleção: `products`
3. Adicione documentos com os seguintes campos:

**Produto 1:**

- title: "Smartphone Samsung Galaxy"
- price: 1299.99
- category: "eletrônicos"
- description: "Smartphone com excelente qualidade"
- image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"

**Produto 2:**

- title: "Notebook Dell"
- price: 2499.99
- category: "eletrônicos"
- description: "Notebook para trabalho"
- image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"

## 🔧 Solução de Problemas

### Se ainda aparecer "Missing or insufficient permissions":

1. **Verifique se as regras foram publicadas**:

   - Acesse o console do Firebase
   - Vá em Firestore Database > Regras
   - Confirme se as regras estão como mostrado acima

2. **Aguarde alguns minutos**:

   - As regras podem levar até 5 minutos para se propagar

3. **Limpe o cache do navegador**:

   - Pressione F12 > Application > Storage > Clear site data

4. **Reinicie a aplicação**:
   - Pare o servidor (Ctrl+C no terminal)
   - Execute `npm start` novamente

## 📱 Status da Aplicação

- ✅ **Dados Mock**: Funcionando (6 produtos de demonstração)
- ⚠️ **Firebase**: Precisa configurar regras de permissão
- ✅ **Interface**: Funcionando perfeitamente

Quando o Firebase estiver configurado, os dados mock serão automaticamente substituídos pelos dados reais do banco.
